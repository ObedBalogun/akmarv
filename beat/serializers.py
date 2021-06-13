from rest_framework import serializers
from .models import Beat, OrderItem,License


class BeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beat
        fields = ['title', 'artwork', 'genre', 'mp3_file', 'wav_file', 'stem_tracks']


class LicenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = License
        fields = ['license_type', 'license_price','license_details']


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ["license", "beat", "order_date", "order_price"]