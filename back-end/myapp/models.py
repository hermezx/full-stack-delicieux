from django.db import models

# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length=255)
    no_of_guests =  models.IntegerField(default=6)
    bookingdate = models.DateTimeField()

class Menu(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    inventory = models.IntegerField(default=5)
    image = models.ImageField(upload_to='menu_images/', null=True, blank=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    

    def __str__(self):
        return f'{self.title} : {str(self.price)}'

class Order(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} - {self.name}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.quantity}x {self.title} (Order #{self.order.id})"
