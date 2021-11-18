from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django_plot import df
import pandasql as ps
# Create your views here.

@api_view(['GET'])
def filter(request):
  q1 = ps.sqldf("select * from df where age>50")
  print(q1)
  return Response(q1)   



