# Generated by Django 3.2.8 on 2021-10-27 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0003_alter_wine_bio'),
        ('jwt_auth', '0002_user_favourites'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='favourites',
            field=models.ManyToManyField(blank=True, related_name='users', to='wines.Wine'),
        ),
    ]
