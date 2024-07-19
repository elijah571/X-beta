from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from .views import home, signup_view, login_view, signup_success_view, product_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('signup/', signup_view, name='signup'),
    path('signup_success/<int:user_id>/', signup_success_view, name='signup_success'),
    path('login/', login_view, name='login'),
    path('products/', TemplateView.as_view(template_name='products.html'), name='products'),
    path('products/<str:product_id>/', product_detail, name='product-detail'),
    path('api/', include('products.urls')),
    path('api/', include('accounts.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]