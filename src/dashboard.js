import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [volunteerHistory, setVolunteerHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://127.0.0.1:8000/api/user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    fetchUserData();

    // Mock volunteer history for now
    setVolunteerHistory([
      { date: "2025-03-10", activity: "Animal Feeding", hours: 2 },
      { date: "2025-03-17", activity: "Shelter Cleaning", hours: 3 },
      { date: "2025-03-22", activity: "Adoption Event", hours: 4 },
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!userData) {
    return <div className="dashboard-container">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome {userData.username}</h2>
        <p className="welcome-msg">This is your dashboard.</p>

        <div className="user-info">
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>

        <div className="volunteer-history">
          <h3>Volunteer History</h3>
          <ul>
            {volunteerHistory.map((entry, index) => (
              <li key={index}>
                <strong>{entry.date}</strong> – {entry.activity} ({entry.hours} hrs)
              </li>
            ))}
          </ul>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
