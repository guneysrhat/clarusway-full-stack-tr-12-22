# Generated by Django 4.2.1 on 2023-05-08 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0002_customer_alter_student_email_alter_student_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='age',
            field=models.PositiveIntegerField(blank=True, choices=[(10, 'Yaş: 10'), (20, 'Yaş: 20'), (30, 'Yaş: 30'), (40, 'Yaş: 40'), (50, 'Yaş: 50')], default=0, null=True),
        ),
    ]