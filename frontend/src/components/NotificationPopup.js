import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationPopup = () => {
  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/notifications/");

    // Handle incoming messages
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      toast(data.message); // Display the notification as a popup
    };

    // Handle WebSocket errors
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return <ToastContainer />;
};

export default NotificationPopup;