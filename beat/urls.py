from django.urls.conf import path

from .views import *

from .auth import UserAuthToken

app_name = 'beat'

urlpatterns = [
    path("auth/", UserAuthToken.as_view(), name="api-user-auth"),
    path("wavegod/", UserAuthToken.as_view(), name="api-user-auth"),
    path("beats/", manage_beats, name="api-beats"),
    path("beat/<int:beat_id>/", manage_beat, name="api-manage-beat"),
    path('cart/add/<int:beat_id>/', cart_add, name='cart_add'),
    path('cart/item_clear/<int:id>/', item_clear, name='item_clear'),
    path('cart/cart_clear/', cart_clear, name='cart_clear'),
    path('cart/cart-detail/', cart_detail, name='cart_detail'),
    path('manage-payment/', manage_checkout, name='make-payment'),
    path('confirm-payment/', manage_payment_confirmation, name='payment-confirm'),
]