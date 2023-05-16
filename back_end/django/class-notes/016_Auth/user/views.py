from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from user.serializers import RegistrationSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    
    def create(self, request, *args, **kwargs):
        serializer =self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=False):
            return Response({'message':serializer.errors},satatus=status.HTTP_400_BAD_REQUEST)
        user = serializer.save()
        
        token = Token.objects.create(
            user=user
        )
        
        data =serializer.data
        data['token'] = token.key
        header = self.get_success_headers(serializer.data)
        return Response({'message':'User created successfully'}, status=status.HTTP_201_CREATED, headers=header)
        
        

