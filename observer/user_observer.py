from base_observer import Observer

class UserObserver(Observer):
        def __init__(self, user):
            self.user = user

        def update(self, message, sender = None):
            sender_info = f" from {sender}" if sender else ""
            print(f"Notification for {self.user.username}: {message}{sender_info}")
            