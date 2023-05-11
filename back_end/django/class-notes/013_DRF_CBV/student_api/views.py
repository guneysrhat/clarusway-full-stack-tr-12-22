from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Student
from .serializers import StudentSerializer

# ----------------------------------------------------------------
# APIView
# https://www.django-rest-framework.org/tutorial/3-class-based-views/
# ----------------------------------------------------------------

# Listele:
class StudentListCreate(APIView):

    # Listele (GET Method):
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(instance=students, many=True)
        return Response(serializer.data)
    
    # Yeni Kayıt (POST Method)
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class StudentDetailUpdateDelete(APIView):

    # Tek kayıt görüntüle:
    def get(self, request, pk):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(instance=student)
        return Response(serializer.data)
    
    # Tek kayıt güncelle:
    def put(self, request, pk):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(instance=student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    # Tek kayıt sil:
    def delete(self, request, pk):
        student = get_object_or_404(Student, id=pk)
        student.delete()
        return Response({ "message": "Deleted" }, status=status.HTTP_204_NO_CONTENT)
    
# ----------------------------------------------------------------
# Yukarıdaki işlemleri tek class'da yazmaya çalışalım

class StudentGPPD(APIView):

    def get(self, request, pk=0):
        if pk:
        # Tek kayıt görüntüle:
            student = get_object_or_404(Student, id=pk)
            serializer = StudentSerializer(instance=student)
            return Response(serializer.data)
        else:
        # Kayıtları listele:
            students = Student.objects.all()
            serializer = StudentSerializer(instance=students, many=True)
            return Response(serializer.data)
    
    # Yeni Kayıt (POST Method)
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Tek kayıt güncelle:
    def put(self, request, pk):
        student = get_object_or_404(Student, id=pk)
        serializer = StudentSerializer(instance=student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    # Tek kayıt sil:
    def delete(self, request, pk):
        student = get_object_or_404(Student, id=pk)
        student.delete()
        return Response({ "message": "Deleted" }, status=status.HTTP_204_NO_CONTENT)


