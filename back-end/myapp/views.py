from django.shortcuts import render
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateAPIView, DestroyAPIView
from .models import Menu, Booking, Order, OrderItem
from .serializers import MenuSerializer, BookingSerializer, UserSerializer
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer
   permission_classes = [permissions.IsAuthenticated]

def index(request):
    return render(request, 'index.html', {})

class MenuItemView(ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class SingleMenuView(RetrieveUpdateAPIView, DestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    
@api_view(['POST'])
def place_order(request):
    name = request.data.get('name')
    address = request.data.get('address')
    items = request.data.get('items', [])
    total = request.data.get('total')

    order = Order.objects.create(name=name, address=address, total=total)
    for item in items:
        OrderItem.objects.create(
            order=order,
            title=item['title'],
            price=item['price'],
            quantity=item['quantity']
        )
    return Response({'status': 'ok'})


