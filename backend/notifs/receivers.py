from django.dispatch import receiver
from .signals import notification_signal

@receiver(notification_signal)
def handle_notification(sender, **kwargs):
    message = kwargs.get('message')
    print(f"Notification received from {sender} with message: {message}")