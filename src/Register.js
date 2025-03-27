import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";

function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        setError(data.username || data.email || data.password || "Registration failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="form-container register-bg">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-msg">{error}</p>}
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        <p className="form-prompt">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <Link to="/" className="home-link">NSAE Home Page</Link>
      </form>
    </div>
  );
}

export default Register;
