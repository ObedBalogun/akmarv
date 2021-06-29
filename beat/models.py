from django.db import models
from django.contrib.auth.models import User
from djmoney.models.fields import MoneyField


LICENSES = (
    ('MP3 License','mp3'),
    ('WAV License','wav'),
    ('WAV + Trackouts','wtrackout'),
    ('Exclusive License','exclusive'),
)


# Create your models here.


class Beat(models.Model):
    title = models.CharField(max_length=250, blank=False, null=False)
    genre = models.CharField(max_length=250, blank=False, null=False)
    artwork = models.ImageField(null=True,upload_to=f'artwork')
    mp3_file = models.FileField(upload_to=f'mp3_files')
    wav_file = models.FileField(upload_to=f'wav_files')
    stem_tracks = models.FileField(upload_to=f'stem_tracks')

    def __str__(self):
        return f"{self.title}"


class License(models.Model):
    license_type = models.CharField(max_length=50, choices=LICENSES)
    license_content = models.FileField(upload_to=f'licenses')
    license_price = models.IntegerField()



    def __str__(self):
        return f"{self.license_type}"


class OrderItem(models.Model):
    license = models.CharField(max_length=10)
    name = models.ForeignKey(Beat, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(blank=True)
    price = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', currency_choices=[
        ('USD', 'US Dollar'),
        ('NGN', 'Naira')
    ])

    def __str__(self):
        return f"{self.name} with {self.license}"


class Customer(models.Model):
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    email = models.EmailField()

    def __str__(self):
        return f" {self.first_name} "


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_items = models.ManyToManyField(OrderItem, blank=True)
    total_amount = models.FloatField(null=True, blank=True)
    reference_id = models.CharField(max_length=100, blank=True, editable=False, unique=True)

    def __str__(self):
        return f"Order by {self.customer}"


class Payment(models.Model):
    customer_email = models.EmailField()
    reference_id = models.CharField(max_length=250)
    payment_status = models.CharField(max_length=50)
    amount_paid = MoneyField(max_digits=10, decimal_places=2,)

    def __str__(self):
        return f"Payment by {self.customer_email}"

