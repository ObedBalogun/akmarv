from django.urls.conf import path

from .views import *


app_name = 'beat'

urlpatterns = [
    path("beats/", manage_beats, name="api-beats"),
    path("beat/<slug:beat_title>/", manage_beat, name="api-manage-beat"),
    path('licenses/', manage_licenses, name='manage-licenses'),
    path('cart/add/<int:beat_id>/', cart_add, name='cart_add'),
    path('cart/item_clear/<int:id>/', item_clear, name='item_clear'),
    path('cart/cart_clear/', cart_clear, name='cart_clear'),
    path('cart/cart-detail/', cart_detail, name='cart_detail'),
    path('contact-me/', contact_me, name='contact-marv'),
    path('manage-payment/', manage_checkout, name='make-payment'),
    path('confirm-payment/', manage_payment_confirmation, name='payment-confirm'),
]
