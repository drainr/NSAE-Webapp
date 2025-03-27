import React from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const events = [
    { title: "Adoption Fair", date: "April 5, 2025", location: "City Park" },
    { title: "Volunteer Orientation", date: "April 10, 2025", location: "Main Shelter HQ" },
    { title: "Fundraiser Gala", date: "May 1, 2025", location: "Downtown Banquet Hall" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Upcoming Events</h2>
        <p className="events-subtext">Here are your upcoming events. Stay tuned!</p>
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event-item">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
