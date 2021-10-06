from django.test import SimpleTestCase
from django.urls import reverse, resolve
from beat.views import manage_beat,manage_beats,manage_checkout,manage_payment_confirmation

class TestUrls(SimpleTestCase):

    def test_api_beats_url(self):
        url = reverse("beat:api-manage-beats")
        self.assertEquals(resolve(url).func,manage_beats)

    def test_api_beat_url(self):
        url = reverse("beat:api-manage-beat",args=["some-beat-title"])
        self.assertEquals(resolve(url).func,manage_beat)

    def test_api_manage_payment_url(self):
        url = reverse("beat:make-payment")
        self.assertEquals(resolve(url).func,manage_checkout)

    def test_api_manage_confirm_payment_url(self):
        url = reverse("beat:confirm-payment")
        self.assertEquals(resolve(url).func,manage_payment_confirmation)
