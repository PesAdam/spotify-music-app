# Generated by Django 4.0.5 on 2022-06-11 21:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='create_at',
            new_name='created_at',
        ),
    ]
