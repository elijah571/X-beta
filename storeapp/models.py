from django.db import models


class Customer(models.Model):
    First_name = models.CharField(max_length=50)
    Last_name = models.CharField(max_length=50)
    Email = models.EmailField()
    Phone = models.CharField(max_length=16)
    City = models.CharField(max_length=100)


    def __str__(self) -> str:
        return "{} {}".format(self.First_name, self.Last_name)

class Category(models.Model):
    Name = models.CharField(max_length=100)
    Description = models.TextField(blank=True, null=True)
    
    
    def __str__(self) -> str:
        return "{}".format(self.Name)

class Product(models.Model):
    Name = models.CharField(max_length=100)
    Description = models.TextField()
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    Stock = models.IntegerField()


    def __str__(self) -> str:
        return "{}".format(self.Name)

class Order(models.Model):
    Customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    Created = models.DateTimeField(auto_now_add=True)
    Updated = models.DateTimeField(auto_now=True)
    Paid = models.BooleanField(default=False)


    def __str__(self) -> str:
        return "Order {}".format(self.id)

class OrderItem(models.Model):
    Order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    Product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    Quantity = models.PositiveIntegerField(default=1)
    Date_added = models.DateTimeField(auto_now_add=True)


class UpdateOrder(models.Model):
    Order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    Desc = models.CharField(max_length=500)
    Updated = models.DateField(auto_now=True)


class Review(models.Model):
    Product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    Customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    Rating = models.PositiveIntegerField()
    Comment = models.TextField(blank=True)
    Created = models.DateTimeField(auto_now_add=True)
    Updated = models.DateTimeField(auto_now=True)


    def __str__(self) -> str:
        return "Review {} by {}".format(self.id, self.customer)

class Cart(models.Model):
    Customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    Created = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return "{} {}".format('Cart', self.id)

class CartItem(models.Model):
    Cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    Product = models.ForeignKey(Product, related_name='+', on_delete=models.CASCADE)
    Quantity = models.PositiveIntegerField(default=1)
    Date_added = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return "Item {}".format(self.id)