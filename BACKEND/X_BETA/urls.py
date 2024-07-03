from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from .views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('products/', TemplateView.as_view(template_name='products.html'), name='products'),
    path('product/<int:id>/', TemplateView.as_view(template_name='product_detail.html'), name='product-detail'),
    path('api/', include('products.urls')),
    path('api/', include('accounts.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
