from django.contrib import admin
from .models import Customer, Category, Product, Order, OrderItem, UpdateOrder, Review, Cart, CartItem

# Register your models here.

admin.site.register(Customer)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(UpdateOrder)
admin.site.register(Review)
admin.site.register(Cart)
admin.site.register(CartItem)