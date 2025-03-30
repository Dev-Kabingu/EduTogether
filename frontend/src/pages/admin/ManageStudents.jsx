import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", grade: "" });
  const [editStudent, setEditStudent] = useState(null);

 
  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

 
  const addStudent = () => {
    axios.post("http://localhost:5000/api/students", newStudent)
      .then(response => {
        setStudents([...students, response.data]);
        setNewStudent({ name: "", grade: "" });
      })
      .catch(error => console.error("Error adding student:", error));
  };

 
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/api/students/${id}`)
      .then(() => setStudents(students.filter(s => s._id !== id)))
      .catch(error => console.error("Error deleting student:", error));
  };

  
  const updateStudent = () => {
    axios.put(`http://localhost:5000/api/students/${editStudent._id}`, editStudent)
      .then(response => {
        setStudents(students.map(s => (s._id === editStudent._id ? response.data : s)));
        setEditStudent(null);
      })
      .catch(error => console.error("Error updating student:", error));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Students</h1>

      {/* Add New Student Form */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold">Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Grade"
          value={newStudent.grade}
          onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          className="border p-2 m-2"
        />
        <button onClick={addStudent} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      {/* List Students */}
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold">Students List</h2>
        <ul>
          {students.map(student => (
            <li key={student._id} className="flex justify-between items-center border-b p-2">
              {editStudent && editStudent._id === student._id ? (
                <>
                  <input
                    type="text"
                    value={editStudent.name}
                    onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="text"
                    value={editStudent.grade}
                    onChange={(e) => setEditStudent({ ...editStudent, grade: e.target.value })}
                    className="border p-2"
                  />
                  <button onClick={updateStudent} className="bg-yellow-500 text-white px-4 py-2 rounded">Save</button>
                </>
              ) : (
                <>
                  <span>{student.name} - Grade: {student.grade}</span>
                  <div>
                    <button onClick={() => setEditStudent(student)} className="bg-blue-500 text-white px-2 py-1 rounded mx-1">Edit</button>
                    <button onClick={() => deleteStudent(student._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
