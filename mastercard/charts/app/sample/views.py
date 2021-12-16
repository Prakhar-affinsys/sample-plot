from django.shortcuts import render
from .models import Merchant
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['POST'])
def filter(request):
    if(request.method == 'POST'):
        qs = Merchant.objects.filter(**request.data).values()
        print(qs)
        return Response(qs)
    return Response(status=400)

    









