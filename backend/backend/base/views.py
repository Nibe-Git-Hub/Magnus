from django.shortcuts import render
from django.http import JsonResponse
from .data import logo, team
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def get_routes(request):
    routes = [
        'GET /api/',
        'GET /api/team/',
        'GET /api/team/<id>/',
    ]
    return Response(routes)

@api_view(['GET'])
def get_teams(request):
    return Response(team)

@api_view(['GET'])
def get_team(request, pk):
    team = None
    for item in team:
        if item['_id'] == pk:
            team = item
            break
    return Response(team)