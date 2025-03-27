import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import VolunteerForm from "./VolunteerForm";
import DashboardLayout from "./DashboardLayout";
import DashboardHome from "./DashboardHome";
import VolunteerHistory from "./VolunteerHistory";
import UpcomingEvents from "./UpcomingEvents";
import Reports from "./Reports"; // ✅ Use correct component name for reports
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div>
        {/* Top Navbar (only for non-dashboard pages) */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <nav className="navbar">
                  <div className="nav-logo">NSAE</div>
                  <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="/register" className="register-btn">Sign Up</a>
                    <a href="/login" className="login-btn">Log In</a>
                  </div>
                  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </nav>

                {/* Home Page Content */}
                <div>
                  <div className="App-header">
                    <h1>No Stray Animals Ever</h1>
                    <p>
                      Welcome to No Stray Animals Ever! We are dedicated to rescuing
                      and caring for stray animals, ensuring they find a safe and loving home.
                      Scroll down to learn more about our mission, meet our team,
                      and find out how you can get involved!
                    </p>
                  </div>

                  <div className="section-divider"></div>

                  <div className="mission-section">
                    <div className="mission-content">
                      <h2 className="section-title">Our Mission</h2>
                      <p>
                        At No Stray Animals Ever (NSAE), our mission is to rescue, protect, and provide safe shelter for stray animals across Ultra Planet.
                        We are dedicated to ensuring that every stray, whether big or small, finds a place where they are cared for, loved, and given a second
                        chance at life.
                      </p>
                      <p>
                        Through the collective efforts of our board members, caregivers, volunteers, and coordinators, we work tirelessly to identify, rescue,
                        and rehabilitate stray animals, offering them medical care, nourishment, and a home at our state-of-the-art safari park.
                      </p>
                      <p>
                        Our commitment extends beyond just sheltering animals—we strive to create a transparent, efficient, and automated system that streamlines
                        animal rescues, encourages volunteer participation, and strengthens our ability to provide ongoing care. With the support of generous
                        donations and a dedicated team, we aim to eliminate animal homelessness and ensure that no stray is ever left behind.
                      </p>
                    </div>
                  </div>

                  <div className="section-divider"></div>

                  <div className="volunteer-section">
                    <div className="volunteer-content">
                      <h2 className="section-title" style={{ color: "#2E7D32" }}>Become a Volunteer</h2>
                      <p>
                        Join us in making a difference! By becoming a volunteer, you will help us rescue and care for stray animals,
                        ensuring they find safe and loving homes. Your support is invaluable to our mission.
                      </p>
                      <a href="/signup" className="volunteer-btn">Volunteer Sign-Up Form</a>
                    </div>
                  </div>

                  <div className="section-divider"></div>

                  <div className="contact-section">
                    <h2 className="contact-title">Contact Us</h2>
                    <p>Email: contact@nsae.org</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main Street, Test, TS 00000, Ultra Planet</p>
                  </div>
                </div>
              </>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<VolunteerForm />} />

          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="volunteer-history" element={<VolunteerHistory />} />
            <Route path="upcoming-events" element={<UpcomingEvents />} />
            <Route path="reports" element={<Reports />} /> {/* ✅ Correct route */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
