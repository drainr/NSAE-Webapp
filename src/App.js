import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import VolunteerForm from "./VolunteerForm";
import "./App.css";

function App() {
  // State for Mobile Menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Board Members Data
  const boardMembers = [
    { name: "CEO", title: "CEO", image: "/ceopic.jpeg" },
    { name: "Board Member 1", title: "Board Member", image: "/boardmember1.jpeg" },
    { name: "Board Member 2", title: "Board Member", image: "/boardmember2.jpeg" },
    { name: "Board Member 3", title: "Board Member", image: "/boardmember3.jpeg" },
    { name: "Board Member 4", title: "Board Member", image: "/boardmember4.jpeg" },
  ];
  
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-logo">NSAE</div>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="#">Test 1</Link>
            <Link to="#">Test 2</Link>
            <Link to="#">Test 3</Link>
            <Link to="#" className="login-btn">Log In</Link>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Background Section */}
                <div className="App-header">
                  <h1>No Stray Animals Ever</h1>
                  <p>
                    Welcome to No Stray Animals Ever! We are dedicated to rescuing
                    and caring for stray animals, ensuring they find a safe and loving home.
                    Scroll down to learn more about our mission, meet our team,
                    and find out how you can get involved!
                  </p>
                </div>

                {/* Section Separator */}
                <div className="section-divider"></div>

                {/* Mission Section */}
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

                {/* Another Section Divider (Before Next Section) */}
                <div className="section-divider"></div>

                {/* Board Members Section */}
                <div className="board-section">
                  <h2 className="section-title">Meet Our Board Members</h2>
                  <div className="board-grid">
                    {/* CEO Grid (Left Side) */}
                    <div className="ceo-container">
                      <div className="board-member ceo">
                        <img src="/ceopic.jpeg" alt="CEO - CEO" />
                        <h3>CEO</h3>
                        <p>CEO</p>
                      </div>
                    </div>

                    {/* Volunteers Grid (Right Side) */}
                    <div className="volunteers-grid">
                      {boardMembers.slice(1).map((member, index) => (
                        <div key={index} className="board-member volunteer">
                          <img src={member.image} alt={member.name} />
                          <h3>{member.name}</h3>
                          <p>{member.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Another Section Divider */}
                <div className="section-divider"></div>

                {/* Volunteer Section */}
                <div className="volunteer-section">
                  <div className="volunteer-content">
                    <h2 className="section-title" style={{ color: "#2E7D32" }}>Become a Volunteer</h2>
                    <p>
                      Join us in making a difference! By becoming a volunteer, you will help us rescue and care for stray animals,
                      ensuring they find safe and loving homes. Your support is invaluable to our mission.
                    </p>
                    <Link to="/signup" className="volunteer-btn">Volunteer Sign-Up Form</Link>
                  </div>
                </div>

                {/* Contact Info Section */}
                <div className="contact-section">
                  <h2 className="contact-title">Contact Us</h2>
                  <p>Email: contact@nsae.org</p>
                  <p>Phone: (123) 456-7890</p>
                  <p>Address: 123 Main Street, Test, TS 00000, Ultra Planet</p>
                </div>
              </div>
            }
          />
          
          <Route path="/signup" element={<VolunteerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
