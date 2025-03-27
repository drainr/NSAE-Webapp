import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.non_field_errors || "Login failed: No token received.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong.");
    }
  };

  return (
    <div className="form-container login-bg">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
        <p className="form-prompt">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        <Link to="/" className="home-link">NSAE Home Page</Link>
      </form>
    </div>
  );
}

export default Login;
