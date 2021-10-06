from django.test import TestCase, Client
from django.core.files.uploadedfile import SimpleUploadedFile
import mock
from django.urls import reverse
from beat.models import Beat, Payment, Order, OrderItem, Customer
import json


class TestViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.manage_beat_url = reverse("beat:api-manage-beats")
        self.get_beat_url = reverse("beat:api-manage-beat", args=["some-beat-title"])
        self.mock_file = mock.MagicMock(spec='File', name="mock_image")
        # image_file = SimpleUploadedFile(name='test_image.jpg',content=open('','rb').read(),content_type='image/jpeg')
        self.beat = Beat.objects.create(
            title="some-beat-title",
            genre="Hiphop",
            artwork=self.mock_file,
            mp3_file=self.mock_file,
            wav_file=self.mock_file,
            stem_tracks=self.mock_file

        )

    def test_beat_list_GET(self):
        response = self.client.get(self.manage_beat_url)
        self.assertEquals(response.status_code, 200)

    def test_beat_GET(self):
        response = self.client.get(self.get_beat_url)
        self.assertEqual(response.status_code, 200)

    def test_add_beat_POST(self):
        response = self.client.post(self.manage_beat_url, {
            'title': "some-beat-title",
            'genre': 'Hiphop',
            'artwork': self.mock_file,
            'mp3_file': self.mock_file,
            'wav_file': self.mock_file,
            'stem_file': self.mock_file,

        })
        self.assertEquals(response.status_code, 200)
        self.assertEquals(self.beat.title.first(), 'some-beat-title')
