import { useState, useEffect } from "react";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  const filteredStudents =
    selectedGrade === "All"
      ? students
      : students.filter((student) => student.grade === selectedGrade);

  const uniqueGrades = ["All", ...new Set(students.map((s) => s.grade))];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Manage Students</h1>

      {/* Grade Filter */}
      <div className="mb-4">
        <label className="mr-2">Filter by Grade:</label>
        <select
          className="border p-2"
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
        >
          {uniqueGrades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      {/* Student Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id} className="border">
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.grade}</td>
              <td className="border p-2">
                <button className="px-2 py-1 bg-yellow-500 text-white rounded mr-2">
                  Edit
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredStudents.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-2">
                No students found in this grade.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
