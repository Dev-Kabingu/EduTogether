import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageParents() {
  const [parents, setParents] = useState([]);
  const [newParent, setNewParent] = useState({ 
    name: "", 
    email: "", 
    mobile: "", 
    childName: "", 
    childGrade: "" 
  });
  const [editParent, setEditParent] = useState(null);

  // Fetch parents from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/parents")
      .then(response => setParents(response.data))
      .catch(error => console.error("Error fetching parents:", error));
  }, []);

  // Handle adding a new parent
  const addParent = () => {
    axios.post("http://localhost:5000/api/parents", newParent)
      .then(response => {
        setParents([...parents, response.data]);
        setNewParent({ name: "", email: "", mobile: "", childName: "", childGrade: "" });
      })
      .catch(error => console.error("Error adding parent:", error));
  };

  // Handle deleting a parent
  const deleteParent = (id) => {
    axios.delete(`http://localhost:5000/api/parents/${id}`)
      .then(() => setParents(parents.filter(p => p._id !== id)))
      .catch(error => console.error("Error deleting parent:", error));
  };

  // Handle updating a parent
  const updateParent = () => {
    axios.put(`http://localhost:5000/api/parents/${editParent._id}`, editParent)
      .then(response => {
        setParents(parents.map(p => (p._id === editParent._id ? response.data : p)));
        setEditParent(null);
      })
      .catch(error => console.error("Error updating parent:", error));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Manage Parents</h1>

      {/* Add New Parent Form */}
      <div className="mb-6 p-4 border rounded">
        <h2 className="text-xl font-semibold text-blue-500">Add New Parent</h2>
        <input
          type="text"
          placeholder="Name"
          value={newParent.name}
          onChange={(e) => setNewParent({ ...newParent, name: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newParent.email}
          onChange={(e) => setNewParent({ ...newParent, email: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Mobile"
          value={newParent.mobile}
          onChange={(e) => setNewParent({ ...newParent, mobile: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Child's Name"
          value={newParent.childName}
          onChange={(e) => setNewParent({ ...newParent, childName: e.target.value })}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Child's Grade"
          value={newParent.childGrade}
          onChange={(e) => setNewParent({ ...newParent, childGrade: e.target.value })}
          className="border p-2 m-2"
        />
        <button onClick={addParent} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      {/* List Parents */}
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold text-blue-500">Parents List</h2>
        <ul>
          {parents.map(parent => (
            <li key={parent._id} className="flex justify-between items-center border-b p-2">
              {editParent && editParent._id === parent._id ? (
                <>
                  <input
                    type="text"
                    value={editParent.name}
                    onChange={(e) => setEditParent({ ...editParent, name: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="email"
                    value={editParent.email}
                    onChange={(e) => setEditParent({ ...editParent, email: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="text"
                    value={editParent.mobile}
                    onChange={(e) => setEditParent({ ...editParent, mobile: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="text"
                    value={editParent.childName}
                    onChange={(e) => setEditParent({ ...editParent, childName: e.target.value })}
                    className="border p-2"
                  />
                  <input
                    type="text"
                    value={editParent.childGrade}
                    onChange={(e) => setEditParent({ ...editParent, childGrade: e.target.value })}
                    className="border p-2"
                  />
                  <button onClick={updateParent} className="bg-yellow-500 text-white px-4 py-2 rounded">Save</button>
                </>
              ) : (
                <>
                  <span>
                    {parent.name} ({parent.email}) - Mobile: {parent.mobile} - Child: {parent.childName} (Grade: {parent.childGrade})
                  </span>
                  <div>
                    <button onClick={() => setEditParent(parent)} className="bg-blue-500 text-white px-2 py-1 rounded mx-1">Edit</button>
                    <button onClick={() => deleteParent(parent._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
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
