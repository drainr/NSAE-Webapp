import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-nav">
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/dashboard/volunteer-history">Volunteer History</Link></li>
            <li><Link to="/dashboard/upcoming-events">Upcoming Events</Link></li>
            <li><Link to="/dashboard/reports">Reports</Link></li> {/* ✅ Correct route */}
          </ul>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
