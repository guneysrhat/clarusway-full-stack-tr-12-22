from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view()
def home(request):
    return Response(
        {
            'messege':'Hello World'
        }
    )
    
# -------------------------------------------------------------------
'''
    HTTP Request Types:
        GET -> Public verilerdir. Listeleme/Görüntüleme işlemlerinde kullanılır.
        POST -> Private verilerdir. Kayıt oluşturma işlemlerinde kullanılır. (ID'ye ihtiyaç duymaz.)
        * PUT -> Kayıt güncelleme işlemlerinde kullanılır. (Veri bir bütün olarak güncellenir.) (ID'ye ihtiyaç duyar.)
        * PATCH -> Kayıt güncelleme işlemlerinde kullanılır. (Verinin sadece ilgili kısmı güncellenir.) (ID'ye ihtiyaç duyar.)
        * DELETE -> Kayıt silme işlemlerinde kullanılır. (ID'ye ihtiyaç duyar.)
'''
# -------------------------------------------------------------------
#StudentSerializers Tum Kayitlari Goruntuleme   

from .models import Student
from .serializers import StudentSerializer
from rest_framework import status

@api_view(['GET']) # Default: ['GET']
def student_list(request):
   students = Student.objects.all()
   serializer = StudentSerializer(instance=students, many=True)
#    print(dir(serializer))
#    print(serializer.data)
   return Response(serializer.data)


# -------------------------------------------------------------------
#StudentSerializers Yeni Kayit Ekleme

@api_view(['POST'])
def student_create(request):
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'messege':'Kayıt Eklendi'
        },status=status.HTTP_201_CREATED)
    else:
        return Response({
            'messege':'Kayıt Eklenemedi',
            'data':serializer.data
        },status=status.HTTP_400_BAD_REQUEST)
# -------------------------------------------------------------------
#StudentSerializers Tek Kayit Guoruntuleme
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def student_detail(request, pk):
    # student = Student.objects.get(id=pk)
    student = get_object_or_404(Student, id=pk) #Bulamadiginda Hata Gosterir
    serializer = StudentSerializer(instance=student)
    return Response(serializer.data)
# -------------------------------------------------------------------   
#StudentSerializers Tek Kayit Guncelleme

@api_view(['PUT'])
def student_update(request, pk):
    student = get_object_or_404(Student, id=pk)
    serializer = StudentSerializer(instance=student, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'messege':'Kayıt Güncellendi'
        },status=status.HTTP_202_ACCEPTED)
    else:
        return Response({
            'messege':'Kayıt Güncellenemedi',
            'data':serializer.data
        },status=status.HTTP_400_BAD_REQUEST)