import React, { useState } from "react";
import "./VolunteerForm.css";

function VolunteerForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="signup-section">
      <h2 className="section-title">Volunteer Sign-Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <input type="text" placeholder="Address" required />
        <textarea placeholder="Short Bio" required></textarea>
        <input type="text" placeholder="Interests" required />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {showPopup && <div className="popup">Success! Your volunteer request has been submitted.</div>}
    </div>
  );
}

export default VolunteerForm;
