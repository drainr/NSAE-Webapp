import React, { useEffect, useState } from "react";
import "./Reports.css";

const API_BASE = "http://localhost:8000"; // <-- CHANGE THIS TO MATCH YOUR DJANGO BACKEND PORT

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`${API_BASE}/api/reports/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load reports");
        return res.json();
      })
      .then((data) => setReports(data))
      .catch(() => setError("Failed to load reports."));
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE}/api/reports/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, priority }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to post");
        return res.json();
      })
      .then((newReport) => {
        setReports([newReport, ...reports]);
        setContent("");
        setPriority("Low");
        setError("");
      })
      .catch(() => setError("Failed to post report."));
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE}/api/reports/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setReports(reports.filter((report) => report.id !== id));
      })
      .catch(() => setError("Failed to delete report."));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Reports</h2>
        <p>Submit and view reports visible to all volunteers.</p>

        {error && <p className="error">{error}</p>}

        <form className="report-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your report here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Urgent">Urgent</option>
          </select>
          <button type="submit">Submit Report</button>
        </form>

        <div className="reports-list">
          <h3>Latest Reports:</h3>
          {reports.map((report) => (
            <div
              key={report.id}
              className={`report-box ${report.priority.toLowerCase()}`}
            >
              <p>
                <strong>{report.author}</strong> ({report.priority})
              </p>
              <p>{report.content}</p>
              {report.author === username && (
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(report.id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
