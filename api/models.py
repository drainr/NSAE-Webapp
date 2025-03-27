from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class VolunteerHistory(models.Model):
    user = models.ForeignKey(User, related_name='volunteer_history', on_delete=models.CASCADE)
    event_name = models.CharField(max_length=255)
    hours = models.PositiveIntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.user.username} - {self.event_name} ({self.hours} hrs)"

class Report(models.Model):
    PRIORITY_CHOICES = [
        ("Low", "Low"),
        ("Medium", "Medium"),
        ("Urgent", "Urgent")
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.priority}"
