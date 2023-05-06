from django.urls import path

from .views import fscohort, goodbye

# after '/fscohort/'
urlpatterns = [
    path('', fscohort),
    path('goodbye/', goodbye),
]
