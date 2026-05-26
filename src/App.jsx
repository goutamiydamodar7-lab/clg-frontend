import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import SettingsPage from "./pages/SettingsPage";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
