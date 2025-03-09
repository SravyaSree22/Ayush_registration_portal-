# tips/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def login_view(request):
    return render(request, 'login.html')

def signup_view(request):
    return render(request, 'signup.html')

def about_view(request):
    return render(request, 'about.html')

def contact_view(request):
    return render(request, 'contact.html')

def faq_view(request):
    return render(request, 'faq.html')

def registration_view(request):
    return render(request, 'registration.html')

def sitemap_view(request):
    return render(request, 'sitemap.html')
