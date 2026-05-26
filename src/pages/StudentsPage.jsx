import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const load = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const addStudent = async () => {
    await axios.post("http://localhost:5000/students", {
      name,
      course,
    });

    setName("");
    setCourse("");
    load();
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* SIDEBAR LINKS */}
      <div
        style={{
          width: "250px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🎓 Admin Panel</h2>

        <Link to="/" style={linkStyle}>
          🏠 Dashboard
        </Link>
        <Link to="/students" style={linkStyle}>
          👨‍🎓 Students
        </Link>
        <Link to="/courses" style={linkStyle}>
          📚 Courses
        </Link>
        <Link to="/settings" style={linkStyle}>
          ⚙ Settings
        </Link>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: "20px", background: "#f1f5f9" }}>
        <h1>Students</h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button onClick={addStudent}>Add</button>

        <table
          border="1"
          width="100%"
          cellPadding="10"
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  marginTop: "15px",
};
