from django.db import models
# Create your models here.

class Merchant(models.Model):
    name = models.CharField(max_length=100,blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)