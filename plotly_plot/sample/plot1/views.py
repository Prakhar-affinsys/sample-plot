from django.shortcuts import render
from .models import Merchant
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET','POST'])
def filter(request):
    if(request.method == 'POST'):
        df = request.data['age']
        #print(df)
    # df = request.data
    # print(df)
    # val = df['age']
        qs = Merchant.objects.filter(age__gt = df).values()
        print(qs)
    return Response(qs)

@api_view(['POST'])
def filter1(request):
    if(request.method == 'POST'):
        df1 = request.data['age']
        qs1 = Merchant.objects.filter(age__lt = df1).values()
        ls1 = len(qs1)
        print(ls1)
    return Response(ls1)