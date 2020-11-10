# Generated by Django 2.2.17 on 2020-11-10 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20201110_1917'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_updated',
        ),
        migrations.RemoveField(
            model_name='user',
            name='timestamp_created',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.TextField(blank=True, null=True),
        ),
    ]