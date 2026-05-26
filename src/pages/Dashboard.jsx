import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/students", {
      name,
      email,
      contact,
      course,
    });

    setName("");
    setEmail("");
    setContact("");
    setCourse("");

    alert("Admission Submitted Successfully ✅");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100px",
              height: "95px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />

          <h3
            style={{
              marginTop: "10px",
              fontSize: "17px",
              color: "#38bdf8",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Government Polytechnic Holealur
          </h3>
        </div>
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

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "20px", background: "#f1f5f9" }}>
        <h1>Admission Dashboard</h1>

        {/* FORM */}
        <div style={formBox}>
          <h2>Admission Form</h2>

          <form onSubmit={submitForm}>
            <input
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />

            <input
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              style={inputStyle}
              required
            />

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Select Course</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
            </select>

            <button type="submit" style={btnStyle}>
              Submit Admission
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  marginTop: "15px",
  padding: "8px",
  borderRadius: "6px",
};

const formBox = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "400px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
};

const btnStyle = {
  padding: "10px",
  background: "green",
  color: "white",
  border: "none",
  width: "100%",
  cursor: "pointer",
};
