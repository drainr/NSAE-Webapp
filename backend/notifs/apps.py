from django.apps import AppConfig

class NotificationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'notifs'

    def ready(self):
        # Import the receivers module to connect signals
        import notifs.receivers  # noqa: F401
        # This ensures that the receivers are registered when the app is ready
        print("Notifications app is ready and receivers are loaded.")