from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def signup_view(request):
    return render(request, 'signup.html')

def login_view(request):
    return render(request, 'login.html')