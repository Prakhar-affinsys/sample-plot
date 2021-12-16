#fromfrom _typeshed import SupportsItemAccess
from django.db import models
#from django.db.models.fields import CharField

# Create your models here.
class Merchant(models.Model):
    QR_type = models.CharField(max_length=200)
    mer_code = models.IntegerField(max_length=100)
    date = models.DateField()

    