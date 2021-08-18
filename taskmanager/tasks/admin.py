from django.contrib import admin

from .models import  Task, FAQ, Resource, Employee, Department, Status, TestType, TestEnvironment, Location

# Register your models here.
admin.site.register({Task, FAQ, Resource, Employee, Department, Status, TestType, TestEnvironment, Location})