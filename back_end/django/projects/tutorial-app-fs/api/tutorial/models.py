from django.db import models

# Create your models here.
class Tutorial(models.Model):
    title = models.CharField(max_length=75)
    description = models.TextField()

    def __str__(self):
        return self.title
    