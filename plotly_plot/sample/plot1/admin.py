from django.contrib import admin

# Register your models here.

from .models import Merchant

@admin.register(Merchant)
class MerchantAdmin(admin.ModelAdmin):
    pass
