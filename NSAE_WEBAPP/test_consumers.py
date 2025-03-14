import json
import pytest
from channels.testing import WebsocketCommunicator
from NSAE_WEBAPP.asgi import application

@pytest.mark.asyncio
@pytest.django_db
async def test_notification_consumer(self):
        # Create a WebSocket communicator
        communicator = WebsocketCommunicator(application, "/ws/notifications/")
        connected, subprotocol = await communicator.connect()
        self.assertTrue(connected)

        # Send a message to the WebSocket
        message = {"message": "Test notification"}
        await communicator.send_json_to(message)

        # Receive the message from the WebSocket
        response = await communicator.receive_json_from()
        self.assertEqual(response, message)

        # Close the WebSocket
        await communicator.disconnect()