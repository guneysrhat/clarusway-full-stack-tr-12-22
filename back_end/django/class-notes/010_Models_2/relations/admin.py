from django.contrib import admin

from .models import *

admin.site.register(Account)
admin.site.register(Profile)
admin.site.register(Address)
admin.site.register(Product)