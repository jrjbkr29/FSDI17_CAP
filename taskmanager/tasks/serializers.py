from rest_framework import serializers
from tasks.models import Task, FAQ, Resource, Employee

# Task Serializer
class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

# FAQ Serializer
class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

# Resources Serializer
class ResourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'

# Employees Serializer
class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'