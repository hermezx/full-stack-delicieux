from django.shortcuts import render
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateAPIView, DestroyAPIView
from .models import Menu, Booking
from .serializers import MenuSerializer, BookingSerializer, UserSerializer
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User

class UserViewSet(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer
   permission_classes = [permissions.IsAuthenticated]
# Create your views here.
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


