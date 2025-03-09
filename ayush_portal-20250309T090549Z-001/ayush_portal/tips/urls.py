# tips/urls.py

from django.urls import path
from . import views  # Import views from your app

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('about/', views.about_view, name='about'),
    path('contact/', views.contact_view, name='contact'),
    path('faq/', views.faq_view, name='faq'),
    path('registration/', views.registration_view, name='registration'),
    path('sitemap/', views.sitemap_view, name='sitemap'),
]
