import React, { useEffect, useState } from "react";
import "./dashboard.css";

const DashboardHome = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8000/api/user/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user info");
        return res.json();
      })
      .then((data) => setUserInfo(data))
      .catch(() => setError("Failed to load user info"));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome</h2>
        <p>This is your dashboard.</p>

        {error ? (
          <p>{error}</p>
        ) : userInfo ? (
          <div className="user-info">
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
          </div>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
