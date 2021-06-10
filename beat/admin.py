from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Beat)
admin.site.register(License)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(OrderItem)
admin.site.register(Customer)