# Generated by Django 4.2.1 on 2023-05-06 11:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Students',
            new_name='Student',
        ),
    ]