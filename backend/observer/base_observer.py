from abc import ABC, abstractmethod
from notifs.signals import notification_signal

class Observer(ABC):
    @abstractmethod
    def update(self, message, sender = None):
        notification_signal.send(sender=sender, message=message)
        pass
        