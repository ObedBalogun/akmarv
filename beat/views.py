# Create your views here.
import os

from django.core.mail import send_mail
from django.http import HttpResponseRedirect, HttpResponse, HttpResponseNotFound
from django.shortcuts import render, redirect
from django.views import View
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from python_paystack.objects.transactions import Transaction
from python_paystack.managers import TransactionsManager

from .helpers import error_msg, success_msg
from akmarv.aws_downloader import create_presigned_url
from .mailer import beat_order_notification, beat_order_failed
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import BeatSerializer, OrderSerializer, LicenseSerializer
from .models import Beat, License, OrderItem, Order, Customer, Payment
from cart.cart import Cart
import webbrowser

# Create your views here.

AUDIO_FILE_TYPES = ['wav', 'mp3', 'ogg']


class Assets(View):
    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'build', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()


@api_view(['GET', 'PUT', ])
@csrf_exempt
def manage_beat(request,beat_id):
    # beat_title = request.GET.get('beat_id',None)
    if request.method == 'GET':
        try:
            beat = Beat.objects.get(id=beat_id)
        except Beat.DoesNotExist:
            return Response(error_msg("Beat with id does not exist."))
        serialized = BeatSerializer(beat)
        return Response(success_msg("Beat retrieved successfully", serialized.data),
                        status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        try:
            beat = Beat.objects.get(id=beat_id)
        except Beat.DoesNotExist:
            return Response(error_msg("Beat with id does not exist."))
        title = request.data.get('title', beat.title)
        mp3_file = request.data.get('mp3_file', beat.mp3_file)
        wav_file = request.data.get('wav_file', beat.wav_file)
        stem_tracks = request.data.get('stems', beat.stem_tracks)

        beat.title = title
        beat.mp3_file = mp3_file
        beat.wav_file = wav_file
        beat.stem_tracks = stem_tracks
        beat.save()

        serialized = BeatSerializer(beat)

        return Response(success_msg("Beat updated successfully", serialized.data), status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET', 'POST', 'DELETE', ])
def manage_beats(request):
    if request.method == 'GET':
        beat = Beat.objects.all().order_by('-id')
        serialized = BeatSerializer(beat, many=True)
        return Response(success_msg("Beats retrieved successfully", serialized.data),
                        status=status.HTTP_200_OK)
    elif request.method == 'POST':
        title = request.data.get('title', None)
        genre = request.data.get('genre', None)
        artwork = request.data.get('artwork', None)
        mp3_file = request.data.get('mp3', None)
        wav_file = request.data.get('wav', None)
        stem_tracks = request.data.get('stems', None)

        if not title:
            return Response(error_msg("title field is missing."))
        if not genre:
            return Response(error_msg("genre field is missing."))
        if not mp3_file:
            return Response(error_msg("mp3_file is missing."))
        if not wav_file:
            return Response(error_msg("wav_file is missing."))
        if not stem_tracks:
            return Response(error_msg("stems are missing."))
        # beat = Beat(title=title, mp3_file=mp3_file, wav_file=wav_file, stem_tracks=stem_tracks)
        beat = Beat(title=title, genre=genre, artwork=artwork, mp3_file=mp3_file, wav_file=wav_file,
                    stem_tracks=stem_tracks)
        beat.save()
        serialized = BeatSerializer(beat)
        return Response(success_msg("Beat created successfully", serialized.data),
                        status=status.HTTP_201_CREATED)
    elif request.method == 'DELETE':
        beat_id = request.data.get('id', None)
        if not beat_id:
            return Response(error_msg("id field is missing."))
        try:
            beat = Beat.objects.get(pk=int(beat_id))
            beat.delete()
            return Response(success_msg("That beat was deleted successfully", None), status=status.HTTP_200_OK)
        except Beat.DoesNotExist:
            return Response(error_msg("Beat with id does not exist."))


@api_view(['GET', 'POST', 'DELETE', ])
@csrf_exempt
def manage_licenses(request):
    if request.method == 'GET':
        beat = License.objects.all().order_by('-id')
        serialized = LicenseSerializer(beat, many=True)
        return Response(success_msg("Licenses retrieved successfully", serialized.data),
                        status=status.HTTP_200_OK)
    elif request.method == "POST":
        license_type = request.data.get('type', None)
        license_price = request.data.get('price', None)
        license_content = request.data.get('content', None)
        beat_license = License(license_type=license_type, license_price=license_price, license_content=license_content)
        beat_license.save()


#   CART LOGIC
@api_view(['POST', ])
@csrf_exempt
# @permission_classes((IsAuthenticatedOrReadOnly,))
def cart_add(request, beat_id):
    if request.method == "POST":
        cart = Cart(request)
        license_type = request.POST.get('license_type')
        beat = Beat.objects.get(id=beat_id)

        if license_type == 'mp3':
            license = License.objects.get(license_type='mp3')
            order = OrderItem(license=license, name="one", price=80,
                              image='https://dashboard.paystack.com/assets/img/logo.svg')
            order.save()
            # order_data = OrderSerializer(order)
            cart.add(product=order)

        elif license_type == 'wav':
            license = License.objects.get(license_type='wav')
            order = OrderItem(license=license, beat=beat, user=request.user, order_price=120)
            order.save()
            cart.add(product=order)

        elif license_type == 'premium':
            license = License.objects.get(license_type='full-body')
            order = OrderItem(license=license, beat=beat, user=request.user, order_price=150)
            order.save()
            cart.add(product=order)

        elif license_type == 'exclusive':
            license = License.objects.get(license_type='exclusive')
            order = OrderItem(license=license, beat=beat, user=request.user, order_price=300)
            order.save()
            cart.add(product=order)

        return Response(success_msg("Beat order added successfully", 'added'),
                        status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes((IsAuthenticatedOrReadOnly,))
def item_clear(request, id):
    if request.method == 'GET':
        beat_id = request.GET['beat_id']
        cart = Cart(request)
        product = Beat.objects.get(id=beat_id)
        cart.remove(product)
        return Response(success_msg("Beat removed successfully", 'removed'),
                        status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes((IsAuthenticatedOrReadOnly,))
def cart_clear(request):
    cart = Cart(request)
    cart.clear()
    return Response(success_msg("Cart Cleared", 'cleared'),
                    status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes((IsAuthenticatedOrReadOnly,))
def cart_detail(request):
    return render(request, 'cart/cart_detail.html')


@csrf_exempt
@api_view(['POST', ])
def manage_checkout(request):
    first_name = request.data.get('user')['firstName']
    last_name = request.data.get('user')['lastName']
    email = request.data.get('user')['email']
    cart_items = request.data.get('items')
    total_amount = request.data.get('cartTotal')
    #   Create Customer Object
    customer = Customer(first_name=first_name, last_name=last_name, email=email)
    customer.save()

    #   Get all orders
    order_count = Order.objects.count()

    #   New order
    order = Order(customer=customer)

    order.total_amount = total_amount

    transaction = Transaction(int(order.total_amount*100), email)
    transaction.metadata = {"order_id": order_count + 1}

    transaction_manager = TransactionsManager()
    transaction = transaction_manager.initialize_transaction('STANDARD', transaction)
    url = transaction.authorization_url
    reference = transaction.reference

    order.reference_id = reference
    order.save()
    for item in cart_items:
        if item['license'] == 'mp3':
            beat = Beat.objects.get(title=item['name'])
            order_item = OrderItem(license="mp3", name=beat, price=item['price'])
            order_item.save()
            order.order_items.add(order_item)
        if item['license'] == 'wav':
            beat = Beat.objects.get(title=item['name'])
            order_item = OrderItem(license="wav", name=beat, price=item['price'])
            order_item.save()
            order.order_items.add(order_item)
        if item['license'] == 'exclusive':
            beat = Beat.objects.get(title=item['name'])
            order_item = OrderItem(license="exclusive", name=beat, price=item['price'])
            order_item.save()
            order.order_items.add(order_item)

    return Response(success_msg("Payment initiation successful", url),
                    status=status.HTTP_200_OK)


@api_view(["GET", ])
@csrf_exempt
def manage_payment_confirmation(request):
    reference = request.GET.get('reference', None)
    transaction = Transaction(0, 'email@test.com')
    transaction_manager = TransactionsManager()
    transaction.reference = reference
    transaction = transaction_manager.verify_transaction(transaction)
    payment_status = transaction.status
    metadata = transaction.metadata
    email = transaction.email
    amount = transaction.amount
    order_id = metadata['order_id']
    order = Order.objects.get(id=order_id)
    payment = Payment(customer_email=email, reference_id=reference, payment_status=payment_status, amount_paid=amount)
    payment.save()

    if payment_status == "success":
        for item in order.order_items.all():
            if item.license == "mp3":
                download_url = create_presigned_url(f"marvs_beats/mp3_files/{item.name}.mp3")
                beat_order_notification(item,download_url, order, email)
            if item.license == "wav":
                download_url = create_presigned_url(f"marvs_beats/wav_files/{item.name}.wav")
                beat_order_notification(item,download_url, order, email)
            if item.license == "wtrackouts":
                download_url = create_presigned_url(f"marvs_beats/wav_files/{item.name}.wav")
                download_url_2 = create_presigned_url(f"marvs_beats/stem_files/{item.name}.zip")
                beat_order_notification(item,"", order, email, download_url, download_url_2)

            if item.license == "exclusive":
                download_url_1 = create_presigned_url(f"marvs_beats/mp3_files/{item.name}.mp3")
                download_url_2 = create_presigned_url(f"marvs_beats/wav_files/{item.name}.wav")
                download_url_3 = create_presigned_url(f"marvs_beats/stem_files/{item.name}.zip")

                beat_order_notification(item,"", order, email, download_url_1, download_url_2, download_url_3)
        return HttpResponseRedirect(redirect_to='http://www.akmarv.com')


    else:
        beat_order_failed()
        Response(success_msg("Beat order failed", 'fail'),
                 status=status.HTTP_402_PAYMENT_REQUIRED)


@csrf_exempt
@api_view(["POST", ])
def contact_me(request):
    subject = request.data.get('subject')
    message = request.data.get('message')
    name = request.data.get('name')
    email = request.data.get('email')
    content = message + "\n Reply To: " + email
    send_mail(subject, content, name, ["itsakmarveh@gmail.com"], fail_silently=False)

    return Response(success_msg("Mail sent successfully", "success"),
                    status=status.HTTP_200_OK)

# TODO: fix
