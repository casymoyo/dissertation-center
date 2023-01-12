from django.contrib import admin
from .models import User, client, dissertation

admin.site.register(User)
admin.site.register(client)
admin.site.register(dissertation)