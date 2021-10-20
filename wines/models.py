from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.


class Wine(models.Model):
    name = models.CharField(max_length=30, default=None)
    type = models.CharField(max_length=30, default=None)
    bio = models.CharField(max_length=300, default=None)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=None)
    big_pic = models.CharField(max_length=500, default=None)
    small_pic = models.CharField(max_length=500, default=None)
    country = models.CharField(max_length=30, default=None)
    flag = models.CharField(max_length=300, default=None)
    pairings = models.CharField(max_length=500, default=None)
    grapes = models.ManyToManyField(
        'grapes.Grape',  # build many to many relationship through the grape model in the grapes app
        related_name="wines"
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='wines',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.name}, {self.type} - £{self.price}"
