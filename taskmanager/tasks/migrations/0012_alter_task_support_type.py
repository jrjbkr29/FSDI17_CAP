# Generated by Django 3.2.5 on 2021-08-26 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0011_auto_20210820_0235'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='support_type',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
    ]
