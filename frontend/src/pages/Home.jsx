import { useState, useEffect } from "react";
import api from "../api";
import Report from "../components/Report"
import "../styles/Home.css"

function Home() {
    const [reports, setReports] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getReports();
    }, []);

    const getReports = () => {
        api
            .get("/api/reports/")
            .then((res) => res.data)
            .then((data) => {
                setReports(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteReport = (id) => {
        api
            .delete(`/api/reports/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Report deleted!");
                else alert("Failed to delete report.");
                getReports();
            })
            .catch((error) => alert(error));
    };

    const createReport = (e) => {
        e.preventDefault();
        api
            .post("/api/reports/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Report created!");
                else alert("Failed to make report.");
                getReports();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <div>
                <h2>Reports</h2>
                {reports.map((report) => (
                    <Report report={report} onDelete={deleteReport} key={report.id} />
                ))}
            </div>
            <h2>Create a Report</h2>
            <form onSubmit={createReport}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;