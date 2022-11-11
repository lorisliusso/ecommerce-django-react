from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .product import products
# Create your views here.

#HERE WE CREATE FUNCTIONS FOR EACH ROUTE AND WE RETURN DATA

@api_view(['GET'])
def getRoutes(request):
    routes= [

    ]

    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProduct(request, pk):
    product= None
    for obj in products:
        if obj['_id'] == pk:
            product = obj
            break

    return Response(product)