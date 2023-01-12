from django.shortcuts import render
from .forms import clientForm, dissertationForm
from . models import User, client, dissertation

def appPage(request):
    return render(request, 'index.html')

def client(request):
    form = clientForm()
    if request.method == 'POST':
        form = clientForm(request.POST)

        if form.is_valid():
            form.save
            redirect('dissertation')
    return render(request, 'client.html', {'form':form})

def dissertation(request):
    d_form = clientForm()
    if request.method == 'POST':
        form = clientForm(request.POST)

        if form.is_valid():
            form.save
            return render(request, 'success.html', {'form':form})
    return render(request, 'dissertation.html')
