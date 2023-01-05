from . import views
from django.urls import path, include
from rest_framework import routers

router =  routers.DefaultRouter()
router.register(r'client', views.clientView, 'client')
router.register(r'dissertation', views.dissertationView, 'dissertation')
router.register(r'user', views.userView, 'user')

urlpatterns = [
    path('', include(router.urls))
]
