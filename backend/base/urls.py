from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,

)



#HERE WE WRITE THE API PATHS AND WHICH FUNCTION FROM VIEWS TO USE FOR EACH ROUTE
#pk is primary key

urlpatterns= [
    path('users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name= 'products'),
    path('products/<str:pk>/', views.getProduct, name= 'product'),


]


