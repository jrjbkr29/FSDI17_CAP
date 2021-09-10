from tasks.models import Task, FAQ, Resource, Employee, TestType, TestEnvironment, Status, Department, Location
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer, FAQSerializer, ResourceSerializer, EmployeeSerializer, TestTypeSerializer, TestEnvironmentSerializer, StatusSerializer, LocationSerializer, DepartmentSerializer
from drf_multiple_model.viewsets import ObjectMultipleModelAPIViewSet

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer

# class TaskViewSet(viewsets.ModelViewSet):
#     queryset = Task.objects.all()
#     permission_classes = [
#         permissions.IsAuthenticated
#     ]
#     serializer_class = TaskSerializer

#     def get_queryset(self):
#         return self.request.user.tasks.all()
    
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)


# FAQ Viewset
class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FAQSerializer

# Resources Viewset
class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ResourceSerializer

# Employees Viewset
class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer

# Search Viewset
class SearchViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer


class TextAPIView(ObjectMultipleModelAPIViewSet):
    
    querylist = [
        {'queryset': FAQ.objects.all(), 'serializer_class': FAQSerializer},
        {'queryset': TestType.objects.all(), 'serializer_class': TestTypeSerializer},
        {'queryset': TestEnvironment.objects.all(), 'serializer_class': TestEnvironmentSerializer},
        {'queryset': Employee.objects.all(), 'serializer_class': EmployeeSerializer},
        {'queryset': Resource.objects.all(), 'serializer_class': ResourceSerializer},
        {'queryset': Location.objects.all(), 'serializer_class': LocationSerializer},
        {'queryset': Department.objects.all(), 'serializer_class': DepartmentSerializer},
        {'queryset': Status.objects.all(), 'serializer_class': StatusSerializer},
        {'queryset': Task.objects.all(), 'serializer_class': TaskSerializer},
    ]