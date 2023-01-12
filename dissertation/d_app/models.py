from django.db import models
from django.contrib.auth.models import AbstractUser

options = (
    ('web application', 'web application'),
    ('desktop application', 'desktop application'),
    ('mobile application', 'mobile application')
)

options_stack = (
    ('artificial intelligence', 'artificial intelligence'),
    ('machine learning', 'machine learning')
)

class User(AbstractUser):
    image = models.ImageField(upload_to='media/profile', height_field=None, width_field=None, max_length=None)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

class client(models.Model):
    name = models.CharField(max_length = 50)
    surname =  models.CharField(max_length = 50)
    phone = models.CharField(max_length = 50)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return f'{self.name} {self.surname}'

class dissertation(models.Model):
    client = models.OneToOneField("d_app.client", on_delete=models.CASCADE, primary_key=True)
    topic = models.TextField(null = True, blank = True)
    tech = models.CharField(max_length = 50, choices = options)
    tech_stack = models.CharField(max_length = 50, choices = options_stack)
    dissertation_option = models.CharField(max_length = 50)

    def __str__(self):
        return f'{self.client} : {self.topic}'