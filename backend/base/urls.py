from django.urls import path
from . import views

#HERE WE WRITE THE API PATHS AND WHICH FUNCTION FROM VIEWS TO USE FOR EACH ROUTE
#pk is primary key

urlpatterns= [
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name= 'products'),
    path('products/<str:pk>/', views.getProduct, name= 'product'),


]