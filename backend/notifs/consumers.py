import json
from channels.generic.websocket import AsyncWebsocketConsumer

class NotificationConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        # Send a test notification when the WebSocket connects
        await self.send(json.dumps({"message": "Test notification from backend!"}))

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get("message", "No message provided")
        # Echo the message back to the client
        await self.send(json.dumps({"message": message}))