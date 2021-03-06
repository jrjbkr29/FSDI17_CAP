# Generated by Django 3.2.5 on 2021-08-11 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_auto_20210804_0225'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee', models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(choices=[('none', 'None'), ('vibe', 'Vibration'), ('shock', 'Shock'), ('thermal', 'Thermal'), ('tvac', 'Thermal Vacuum'), ('functional', 'Functional')], default='none', max_length=15)),
                ('question', models.CharField(max_length=50)),
                ('answer', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Resources',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resource', models.CharField(max_length=25, unique=True)),
            ],
        ),
        migrations.DeleteModel(
            name='FAQ_Vibration',
        ),
        migrations.AddField(
            model_name='task',
            name='assignedTo',
            field=models.CharField(default='none', max_length=30),
        ),
        migrations.AddField(
            model_name='task',
            name='environment',
            field=models.CharField(choices=[('none', 'None'), ('vibe', 'Vibration'), ('shock', 'Shock'), ('thermal', 'Thermal'), ('tvac', 'Thermal Vacuum'), ('functional', 'Functional')], default='none', max_length=15),
        ),
        migrations.AddField(
            model_name='task',
            name='resource',
            field=models.CharField(default='none', max_length=30),
        ),
        migrations.AddField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('wip', 'In-Progress'), ('hold', 'On-Hold'), ('complete', 'Completed'), ('new', 'New-Request'), ('n/a', 'Not-Scheduled')], default='new', max_length=25),
        ),
        migrations.AlterField(
            model_name='task',
            name='job_type',
            field=models.CharField(choices=[('atp', 'ATP'), ('qtp', 'QTP'), ('dev', 'DEV'), ('n/a', 'N/A')], default='n/a', max_length=3),
        ),
    ]
