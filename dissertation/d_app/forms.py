from django.forms import ModelForm
from . models import client, dissertation

class clientForm(ModelForm):
    class meta:
        model = client
        fields = '__all__'

class dissertationForm(ModelForm):
    
    class Meta:
        model = dissertation
        fields = '__all__'
        
