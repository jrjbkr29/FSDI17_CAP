from django.db import models
from django.contrib.auth.models import User
from django import forms


# Tasks

class Department(models.Model):
    department_name = models.CharField(max_length=15, unique=True)
    def __str__(self):
        return self.department_name
    
class Status(models.Model):
    status_name = models.CharField(max_length=15, unique=True)
    class Meta:
        verbose_name_plural = 'Status'
    def __str__(self):
        return self.status_name
    
class TestType(models.Model):
    test_name = models.CharField(max_length=15, unique=True)
    def __str__(self):
        return self.test_name
    
class TestEnvironment(models.Model):
    environment_name = models.CharField(max_length=15, unique=True)
    def __str__(self):
        return self.environment_name
    
class Employee(models.Model):
    user_name = models.CharField(max_length=16, blank=False, unique=True)
    employee_first_name = models.CharField(max_length=30, blank=False, unique=True)
    employee_last_name = models.CharField(max_length=30, blank=False, unique=True)
    emp_image = models.ImageField(default=None, upload_to=None, height_field=None, width_field=None, max_length=100, null=True)

    class Meta:
        verbose_name_plural = 'Employees'
    
    def __str__(self):
        return self.user_name

class Location(models.Model):
    loc_name = models.CharField(max_length=50, default=None)
    loc_desc = models.CharField(max_length=50, null=True)
    department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL)
    status = models.ForeignKey(Status, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, default=None, null=True, on_delete=models.SET_NULL)

class Resource(models.Model):
    resource_name = models.CharField(max_length=25, blank=False, unique=True)
    status = models.ForeignKey(Status, null=True, on_delete=models.SET_NULL)
    res_image = models.ImageField(null=True, default=None, upload_to=None, height_field=None, width_field=None, max_length=100)
    class Meta:
        verbose_name_plural = 'Resources'

    
    def __str__(self):
        return self.resource_name

class Task(models.Model):
    test_type = models.ForeignKey(TestType, default=None, null=True, on_delete=models.SET_NULL)
    test_environment = models.ForeignKey(TestEnvironment, null=True, on_delete=models.SET_NULL)
    work_order = models.CharField(max_length=10, null=True)
    serial_num = models.CharField(max_length=25, null=True)
    part_num = models.CharField(max_length=25, null=True)
    prod_name = models.CharField(max_length=50, default=None)
    prod_desc = models.CharField(max_length=50, default=None)
    task_desc = models.CharField(max_length=50, default=None)
    poc_email = models.CharField(max_length=50, default=None)
    link_doc = models.CharField(max_length=250, null=True)
    support_type = models.CharField(max_length=50, null=True, default=None)
    assignee = models.ForeignKey(Employee, null=True, on_delete=models.SET_NULL)
    resource = models.ForeignKey(Resource, null=True, on_delete=models.SET_NULL)
    location = models.ForeignKey(Location, null=True, on_delete=models.SET_NULL)
    department = models.ForeignKey(Department, null=True, on_delete=models.SET_NULL)
    status = models.ForeignKey(Status, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, default=None, related_name="tasks", null=True, on_delete=models.CASCADE)


class Asset(models.Model):
    asset_name = models.CharField(max_length=50, default=None)
    asset_desc = models.CharField(max_length=50, default=None)
    asset_sn = models.CharField(max_length=50, default=None)
    asset_pn = models.CharField(max_length=50, default=None)
    asset_cal_due = models.CharField(max_length=250, default=None, null=True)
    asset_cal_last = models.CharField(max_length=250, default=None, null=True)
    task = models.ForeignKey(Task, null=True, on_delete=models.SET_NULL)
    assignee = models.ForeignKey(Employee, default=None, null=True, on_delete=models.SET_NULL)
    resource = models.ForeignKey(Resource, default=None, null=True, on_delete=models.SET_NULL)
    location = models.ForeignKey(Location, default=None, null=True, on_delete=models.SET_NULL)
    department = models.ForeignKey(Department, default=None, null=True, on_delete=models.SET_NULL)
    status = models.ForeignKey(Status, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, default=None, null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.asset_name


class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)
    file = forms.FileField()
    user = models.ForeignKey(User, default=None, on_delete=models.SET_NULL)
    tags = models.ManyToManyField(Task)


class Tag(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class FAQ(models.Model):
    department = models.ForeignKey(Department, default=None, null=True, on_delete=models.SET_NULL)
    question = models.CharField(max_length=250, default=None)
    answer = models.CharField(max_length=250, default=None)
    class Meta:
        verbose_name_plural = 'FAQs'
    def __str__(self):
        return self.question
    

