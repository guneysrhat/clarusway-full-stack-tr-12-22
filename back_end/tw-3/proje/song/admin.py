from django.contrib import admin
from .models import Album, Artist, Song, Lyric

admin.site.register(Album)
admin.site.register(Artist)
admin.site.register(Song)
admin.site.register(Lyric)

