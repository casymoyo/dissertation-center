from django.urls import path
from . import views

urlpatterns = [
    path('', views.appPage, name='appPage'),
    path('', views.client, name='client'),
    path('', views.dissertation, name='dissertation'),
]
