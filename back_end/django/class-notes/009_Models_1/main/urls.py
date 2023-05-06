"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse('''
        <h1>
        Welcome to Home.
        </h1>
    ''')

urlpatterns = [
    # path('url/path/', view_func_name, 'redirection_name'),
    path('', home), # path(url, func)
    path('admin/', admin.site.urls),
    path('fscohort/', include('fscohort.urls')), # fscohort/urls.py
]
