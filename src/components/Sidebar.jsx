import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={styles.sidebar}>
      {/* ✅ TEST BUTTON (ADD HERE) */}
      <button style={{ background: "yellow", color: "black" }}>TEST</button>
      {/* LOGO */}
      <div style={styles.logoBox}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      {/* LINKS */}
      <Link to="/" style={styles.link}>
        🏠 Dashboard
      </Link>
      <Link to="/students" style={styles.link}>
        👨‍🎓 Students
      </Link>
      <Link to="/courses" style={styles.link}>
        📚 Courses
      </Link>
      <Link to="/settings" style={styles.link}>
        ⚙ Settings
      </Link>

      {/* LOGOUT */}
      <div style={{ marginTop: "auto" }}>
        <button onClick={handleLogout} style={styles.logout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    position: "fixed", // ✅ IMPORTANT
    left: 0,
    top: 0,
  },

  logoBox: {
    textAlign: "center",
    marginBottom: "30px",
  },

  logo: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
  },

  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginTop: "15px",
    padding: "8px",
    borderRadius: "6px",
  },

  logout: {
    marginTop: "auto",
    padding: "12px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
    width: "100%", // ✅ important
  },
};
