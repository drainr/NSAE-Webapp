import React, { useEffect, useState } from "react";
import "./dashboard.css";

const VolunteerHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8000/api/user/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user data");
        return res.json();
      })
      .then((data) => {
        setHistory(data.volunteer_history || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load volunteer history");
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Volunteer History</h2>
        <p>Here is a record of your past volunteering activities.</p>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : history.length === 0 ? (
          <p>No volunteer history yet. Check out our upcoming events!</p>
        ) : (
          <div className="volunteer-history">
            <h3>Past Events:</h3>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  <strong>{entry.date}:</strong> {entry.event_name} ({entry.hours} hours)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerHistory;
