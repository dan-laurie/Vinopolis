# Generated by Django 3.2.8 on 2021-10-20 15:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('grapes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Wine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=30)),
                ('type', models.CharField(default=None, max_length=30)),
                ('bio', models.CharField(default=None, max_length=300)),
                ('price', models.DecimalField(decimal_places=2, default=None, max_digits=8)),
                ('big_pic', models.CharField(default=None, max_length=500)),
                ('small_pic', models.CharField(default=None, max_length=500)),
                ('country', models.CharField(default=None, max_length=30)),
                ('flag', models.CharField(default=None, max_length=300)),
                ('pairings', models.CharField(default=None, max_length=500)),
                ('grapes', models.ManyToManyField(related_name='wines', to='grapes.Grape')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='wines', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
