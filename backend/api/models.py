from django.db import models
from django.contrib.auth.models import User

# User/Employee Based Models
class Role(models.Model):
    ROLES = (('CEO', 'CEO'), ('HR', 'HR'), ('Board Member', 'Board Member'), ('Head Caregiver', 'Head Caregiver'), ('Caregiver','Caregiver'), ('Volunteer','Volunteer'))
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="role", null=True)
    role = models.CharField(max_length=200, null=True, choices=ROLES, default="Volunteer")
    

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="profile", null=True)
    name = models.TextField(max_length=200, null=True)
    hobby = models.TextField(max_length=200, null=True)
    town = models.TextField(max_length=200, null=True)
    profile_image = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - Profile"

# Object/Report Based Models
class Report(models.Model):
    title = models.CharField(max_length=200, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name="reports")

    def __str__(self):
        return self.title

class Animal(models.Model):
    TYPE = (('Cat', 'Cat'), ('Dog', 'Dog'), ('Rabbit', 'Rabbit'), ('Snake', 'Snake'), ('Llama', 'Llama'), ('Tiger', 'Tiger'), ('Ostrich', 'Ostrich'))
    HEALTH = (('At Risk', 'At Risk'), ('Poor', 'Poor'), ('Fair', 'Fair'), ('Good', 'Good'), ('Thriving','Thriving'))
    name = models.TextField(max_length=200, null=True)
    type = models.CharField(max_length=200, null=True, choices=TYPE)
    caregiver = models.ForeignKey(User, null=True, on_delete= models.SET_NULL, related_name="animals")
    health = models.TextField(max_length=200, null=True, choices=HEALTH)
    issues = models.TextField(max_length=200, null=True)
