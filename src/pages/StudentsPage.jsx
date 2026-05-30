import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);

  // GET DATA
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

  // STATUS STYLE
  const getStatusClass = (status) => {
    if (status === "Approved") return "bg-green-100 text-green-600";
    if (status === "Rejected") return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-600";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">👨‍🎓 Students List</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            {/* HEADER */}
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Course</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {students.map((stu) => (
                <tr
                  key={stu._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{stu.name}</td>
                  <td className="p-3">{stu.email}</td>
                  <td className="p-3">{stu.contact}</td>
                  <td className="p-3">{stu.course}</td>

                  {/* STATUS */}
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded text-sm font-medium ${getStatusClass(
                        stu.status,
                      )}`}
                    >
                      {stu.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 flex gap-2">
                    {stu.status === "Pending" && (
                      <>
                        <button
                          onClick={() => approveStudent(stu._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          ✓
                        </button>

                        <button
                          onClick={() => rejectStudent(stu._id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          ✕
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => deleteStudent(stu._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
