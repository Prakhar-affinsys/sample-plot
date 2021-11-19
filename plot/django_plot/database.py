import pandas as pd
from django_plot.models import Merchant

tmp_data=pd.read_csv('plot/data/Merchant.csv')
#ensure fields are named~ID,Product_ID,Name,Ratio,Description
#concatenate name and Product_id to make a new field a la Dr.Dee's answer

products = [
    Merchant(
        mer_id = tmp_data.ix[row]['id'], 
        name = tmp_data.ix[row]['Name'],
        age = tmp_data.ix[row]['age'],
        number = tmp_data.ix[row]['number']
    )
    for row in tmp_data['ID']
]

Merchant.objects.bulk_create(products)