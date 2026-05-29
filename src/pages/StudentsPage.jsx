import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  // GET
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // DELETE
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    fetchStudents();
  };

  // APPROVE
  const approveStudent = async (id) => {
    await axios.put(`http://localhost:5000/students/${id}/approve`);
    fetchStudents();
  };

  // REJECT
  const rejectStudent = async (id) => {
    await axios.put(`http://localhost:5000/students/${id}/reject`);
    fetchStudents();
  };

  return (
    <div style={styles.page}>
      <h1>👨‍🎓 Students List</h1>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((stu) => (
              <tr key={stu._id}>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.contact}</td>
                <td>{stu.course}</td>

                {/* STATUS */}
                <td>
                  <span
                    style={{
                      ...styles.badge,
                      background:
                        stu.status === "Approved"
                          ? "#22c55e"
                          : stu.status === "Rejected"
                            ? "#ef4444"
                            : "#facc15",
                    }}
                  >
                    {stu.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  {stu.status === "Pending" && (
                    <>
                      <button
                        onClick={() => approveStudent(stu._id)}
                        style={styles.approveBtn}
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => rejectStudent(stu._id)}
                        style={styles.rejectBtn}
                      >
                        Reject
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => deleteStudent(stu._id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    padding: "20px",
    background: "#f1f5f9",
    minHeight: "100vh",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },

  badge: {
    padding: "5px 10px",
    borderRadius: "6px",
    color: "white",
    fontSize: "12px",
  },

  approveBtn: {
    background: "green",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },

  rejectBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },

  deleteBtn: {
    background: "black",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
