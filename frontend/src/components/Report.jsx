import React from "react";
import "../styles/Report.css"

function Report({ report, onDelete }) {
    const formattedDate = new Date(report.created_at).toLocaleDateString("en-US")

    return (
        <div className="report-container">
            <p className="report-title">{report.title}</p>
            <p className="report-content">{report.content}</p>
            <p className="report-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(report.id)}>
                Delete
            </button>
        </div>
    );
}

export default Report