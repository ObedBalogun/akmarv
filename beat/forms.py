from django import forms
from .models import Beat


class BeatUploadForm(forms.ModelForm):

    class Meta:
        model = Beat
        fields = ['title', 'artwork', 'mp3_file', 'wav_file', 'stem_tracks']
