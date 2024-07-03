from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('products.urls')),
    path('', views.home, name='home'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('products/', TemplateView.as_view(template_name='products.html'), name='products'),
    path('products/<int:id>/', TemplateView.as_view(template_name='product_details.html'), name='product-detail'),
]