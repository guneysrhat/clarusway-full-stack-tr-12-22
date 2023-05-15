from rest_framework import serializers
from .models import (
    Album,
    Artist,
    Song,
    Lyric
)

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = '__all__'
        
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'

class LyricSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lyric
        fields = '__all__'
        
#Song with Lyrics Serializer
class SongWithLyricsSerializer(serializers.ModelSerializer):
    album = serializers.StringRelatedField()
    artist = serializers.StringRelatedField()
    lyric = LyricSerializer()
    class Meta:
        model = Song
        fields = ['album', 'artist', 'lyric', 'name', 'released']

#Album with Songs Serializer
class AlbumWithSongsSerializer(serializers.ModelSerializer):
    songs = SongWithLyricsSerializer(many=True)
    num_of_songs = serializers.SerializerMethodField()
    artist = serializers.StringRelatedField(many = True)
    class Meta:
        model = Album
        fields = ['name', 'released', 'songs', 'num_of_songs', 'artist']
        
    def get_num_of_songs(self, obj):
        return Song.objects.filter(album_id=obj.id).count()