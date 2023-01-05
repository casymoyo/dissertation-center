from django.shortcuts import render
# from rest_framework.response import response
from rest_framework import viewsets
from . forms import clientForm, dissertationForm
from . models import User, client, dissertation
from . serializers import userSerializer, clientSerializer, dissertationSerializer

class userView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = userSerializer
class clientView(viewsets.ModelViewSet):
    queryset = client.objects.all()
    serializer_class = clientSerializer

class dissertationView(viewsets.ModelViewSet):
    queryset = dissertation.objects.all()
    serializer_class = dissertationSerializer

# def appPage(request):
#     return render(request, 'index.html')

# def addClient(request):
#     form = clientForm()
#     if request.method == 'POST':
#         form = clientForm(request.POST)
#         if form.is_valid():
#             form.save
#             redirect('dissertation')
#     return render(request, 'client.html', {'form':form})

# def addDissertation(request):
#     d_form = clientForm()
#     if request.method == 'POST':
#         form = clientForm(request.POST)
#         if form.is_valid():
#             form.save
#             return render(request, 'success.html', {'form':form})
#     return render(request, 'dissertation.html')
