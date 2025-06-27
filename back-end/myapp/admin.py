from django.contrib import admin
from .models import Menu, Booking, OrderItem, Order

# Register your models here.
admin.site.register(Menu)
admin.site.register(Booking)
admin.site.register(Order)
admin.site.register(OrderItem)
