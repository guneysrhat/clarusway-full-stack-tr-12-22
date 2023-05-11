from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status

#Listele :
class StudentListCreate(APIView):
    
    #Listele (GET Method):
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(instance=students, many=True)
        return Response(serializer.data)
    
    # Yeni Kayit (POST Method):
    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class StudentDetailUpdateDelete(APIView):

    # Tek Kayit goruntuleme
    def get(self , request , pk):
        student = get_object_or_404(Student, pk=pk)
        serializer = StudentSerializer(instance=student)
        return Response(serializer, status=status.HTTP_200_OK)
    # Tek Kayit guncelleme
    
    def put(self, request, pk):
        student = get_object_or_404(Student, pk=pk)
        serializer = StudentSerializer(instance=student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Tek Kayit silme
    def delete(self, request, pk):
        student = get_object_or_404(Student, pk=pk)
        student.delete()
        return Response({"message": "Student deleted"}, status=status.HTTP_204_NO_CONTENT)