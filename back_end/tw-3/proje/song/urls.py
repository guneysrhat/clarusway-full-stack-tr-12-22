from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    ArtistListCreateView,
    ArtistRUDView,
    AlbumListCreateView,
    AlbumRUDView,
    SongListCreateView,
    SongRUDView,
    SongWithLyricsListView,
    AlbumWithSongListView,
)

urlpatterns = [
    path('artists/', ArtistListCreateView.as_view()),
    path('artists/<int:pk>/', ArtistRUDView.as_view()),
    path('albums/', AlbumListCreateView.as_view()),
    path('albums/<int:pk>/', AlbumRUDView.as_view()),
    path('songs/', SongListCreateView.as_view()),
    path('songs/<int:pk>/', SongRUDView.as_view()),
    path('lyricsofsong/', SongWithLyricsListView.as_view()),
    path('songsofalbums/', AlbumWithSongListView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
