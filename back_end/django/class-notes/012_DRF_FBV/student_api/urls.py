from django.urls import path
from .views import (
    home,
    student_list,
    student_create,
    student_detail,
    student_update
)



urlpatterns = [
    path('', home),
    path('student_list/', student_list),
    path('student_create/', student_create),
    path('student_detail/<int:pk>/', student_detail),
    path('student_update/<int:pk>/', student_update)
]