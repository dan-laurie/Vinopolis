# Generated by Django 3.2.8 on 2021-10-27 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0003_alter_wine_bio'),
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='favourites',
            field=models.ManyToManyField(related_name='users', to='wines.Wine'),
        ),
    ]
