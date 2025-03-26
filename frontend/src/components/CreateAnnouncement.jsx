import { useState } from "react";
import axios from "axios";

const CreateAnnouncement = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [classLevel, setClassLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(
            "http://localhost:5000/api/announcements/create", // ✅ Correct backend URL
            { title, description, classLevel },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          
      alert("Announcement posted successfully!");
      setTitle("");
      setDescription("");
      setClassLevel("");
    } catch (error) {
      console.error("Error posting announcement:", error);
      alert("Failed to post announcement");
    }
  };
  
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Post Announcement</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" className="border p-2 w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" className="border p-2 w-full mb-2" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Class Level (e.g., Grade 5)" className="border p-2 w-full mb-2" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
      </form>
    </div>
  );
};

export default CreateAnnouncement;
