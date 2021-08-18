from tasks.models import Task, FAQ, Resource, Employee
from rest_framework import viewsets, permissions
from .serializers import TasksSerializer, FAQSerializer, ResourcesSerializer, EmployeesSerializer

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TasksSerializer

# FAQ Viewset
class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FAQSerializer

# Resources Viewset
class ResourcesViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ResourcesSerializer

# Employees Viewset
class EmployeesViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeesSerializer