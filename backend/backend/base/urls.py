from django.contrib import admin
from django.urls import path, include
from .views import get_routes, get_team

urlpatterns = [
    path('', get_routes),
    path('data/', get_team),
    path('data/<str:pk>/', get_team),
]