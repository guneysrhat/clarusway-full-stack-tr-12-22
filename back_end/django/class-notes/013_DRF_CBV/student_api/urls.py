from django.urls import path

from .views import (
    StudentListCreate,
    StudentDetailUpdateDelete,
    StudentGPPD,
)

urlpatterns = [
    path('student_list_create/', StudentListCreate.as_view()),
    path('student_detail_update_delete/<int:pk>', StudentDetailUpdateDelete.as_view()),
    path('student_gppd/', StudentGPPD.as_view()),
    path('student_gppd/<int:pk>', StudentGPPD.as_view()),
]