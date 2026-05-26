import React from "react";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🎓 Admin Panel</h2>

        <Link to="/" style={{ color: "white" }}>
          Dashboard
        </Link>
        <Link
          to="/students"
          style={{ color: "white", display: "block", marginTop: "10px" }}
        >
          Students
        </Link>
        <Link
          to="/courses"
          style={{ color: "white", display: "block", marginTop: "10px" }}
        >
          Courses
        </Link>
        <Link
          to="/settings"
          style={{ color: "white", display: "block", marginTop: "10px" }}
        >
          Settings
        </Link>
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Courses</h1>
        <ul>
          <li>CSE</li>
          <li>ECE</li>
          <li>MECH</li>
          <li>CIVIL</li>
        </ul>
      </div>
    </div>
  );
}
