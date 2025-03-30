import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ name: "", email: "", mobile: "" });
  const [editTeacher, setEditTeacher] = useState(null);

 
  const token = localStorage.getItem("token");

  
  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

 
  useEffect(() => {
    axios.get("http://localhost:5000/api/teachers", axiosConfig)
      .then(response => setTeachers(response.data))
      .catch(error => console.error("Error fetching teachers:", error));
  }, []);

 
  const addTeacher = () => {
    axios.post("http://localhost:5000/api/teachers", newTeacher, axiosConfig)
      .then(response => {
        setTeachers([...teachers, response.data]);
        setNewTeacher({ name: "", email: "", mobile: "" });
      })
      .catch(error => console.error("Error adding teacher:", error));
  };

  const deleteTeacher = (id) => {
    axios.delete(`http://localhost:5000/api/teachers/${id}`, axiosConfig)
      .then(() => setTeachers(teachers.filter(t => t._id !== id)))
      .catch(error => console.error("Error deleting teacher:", error));
  };

  const updateTeacher = () => {
    axios.put(`http://localhost:5000/api/teachers/${editTeacher._id}`, editTeacher, axiosConfig)
      .then(response => {
        setTeachers(teachers.map(t => (t._id === editTeacher._id ? response.data : t)));
        setEditTeacher(null);
      })
      .catch(error => console.error("Error updating teacher:", error));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Manage Teachers</h1>

      {/* Add New Teacher Form */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold text-blue-500">Add New Teacher</h2>
        <input
          type="text"
          placeholder="Name"
          value={newTeacher.name}
          onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newTeacher.email}
          onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Mobile"
          value={newTeacher.mobile}
          onChange={(e) => setNewTeacher({ ...newTeacher, mobile: e.target.value })}
          className="border p-2 m-2"
        />
        <button onClick={addTeacher} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      {/* List Teachers */}
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold text-blue-500">Teachers List</h2>
        <ul>
          {teachers.map(teacher => (
            <li key={teacher._id} className="flex justify-between items-center border-b p-2">
              {editTeacher && editTeacher._id === teacher._id ? (
                <>
                  <input
                    type="text"
                    value={editTeacher.name}
                    onChange={(e) => setEditTeacher({ ...editTeacher, name: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="email"
                    value={editTeacher.email}
                    onChange={(e) => setEditTeacher({ ...editTeacher, email: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="text"
                    value={editTeacher.mobile}
                    onChange={(e) => setEditTeacher({ ...editTeacher, mobile: e.target.value })}
                    className="border p-2"
                  />
                  <button onClick={updateTeacher} className="bg-yellow-500 text-white px-4 py-2 rounded">Save</button>
                </>
              ) : (
                <>
                  <span>{teacher.name} ({teacher.email}) - Mobile: {teacher.mobile}</span>
                  <div>
                    <button onClick={() => setEditTeacher(teacher)} className="bg-blue-500 text-white px-2 py-1 rounded mx-1">Edit</button>
                    <button onClick={() => deleteTeacher(teacher._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
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
