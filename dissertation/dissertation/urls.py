from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from d_app import views

router =  routers.DefaultRouter()
router.register(r'client', views.clientView, 'client')
router.register(r'dissertation', views.dissertationView, 'dissertation')
router.register(r'user', views.userView, 'user')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
