from django.urls import path

from .views import (
    home,
    student_list,
    student_create,
    student_detail,
    student_update,
    student_delete,
    student_list_create,
    student_detail_update_delete,
)

urlpatterns = [
    path('', home),
    path('student_list/', student_list), # listele
    path('student_create/', student_create), # Yeni Kayıt
    path('student_detail/<int:pk>', student_detail), # Tek Kayıt Getir
    path('student_update/<int:pk>', student_update), # Tek Kayıt Güncelle
    path('student_delete/<int:pk>', student_delete), # Tek Kayıt Silme
    # Fonksiyonların birleşmiş halleri:
    path('student_list_create/', student_list_create),
    path('student_detail_update_delete/<int:pk>', student_detail_update_delete),
]