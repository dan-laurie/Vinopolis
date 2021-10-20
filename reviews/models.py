from django.db import models

# Create your models here.


class Review(models.Model):
    text = models.TextField(max_length=300)
    # this creates a datetimestamp automatically
    created_at = models.DateTimeField(auto_now_add=True)
    wine = models.ForeignKey(
        "wines.Wine",  # defines the app and model that we are looking to define a relationship between
        related_name="reviews",  # this is what the column will be called on the wine lookup
        # specifies the review shopuld be deleted if the wine is deleted
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="reviews",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.wine} - {self.created_at}"
