from django.http.response import HttpResponse
from django.shortcuts import render
import pandas
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
import pandasql as ps
import pandas as pd
#from models import Merchant
import json
# Create your views here.

@api_view(['POST'])
def filter(request):
  print(request.data)
  df = pd.DataFrame(Merchant.objects.all().values().filter())



# def filter():
#   query = {'age__lt'}
#   qs = Merchant.objects.filter(**query)
  
  
# @api_view(['POST'])
# def filter(request):
#   print(request.data)
#   q2 = request.data  
#   q3 = q2.get('age')
#   a = f"SELECT * FROM df WHERE age > ({q3})"
#   q1 = ps.sqldf(a)
#   print(q1)
#   return Response(q1)  

@api_view(['GET'])
def filter1(request):
  q2 = ps.sqldf("select SUM(age) from df where number>230981")
  print(q2)
  return Response(q2)

@api_view(['GET'])
def filter2(request): 
  q3 = ps.sqldf("select COUNT(*) from df where age < 50")
  print(q3)
  return Response(q3)

@api_view(['GET'])
def filter3(request):
  q4 = ps.sqldf("select name, age from df where age > 50 and number < 239813")
  print(q4)
  return Response(q4)

