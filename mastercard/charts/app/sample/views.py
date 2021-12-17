from django.shortcuts import render
from .models import Merchant
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.db.models import Sum
# Create your views here.

@api_view(['POST'])
def filter(request):
    if(request.method == 'POST'):
        #qs = Merchant.objects.filter(**request.data).values().count()
        qs1 = Merchant.objects.filter(**request.data).aggregate(Sum('mer_code'))
        print(qs1['mer_code__sum'])
        return Response(qs1['mer_code__sum'])
    return Response(status=400)

    









