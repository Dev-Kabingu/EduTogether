import { useState } from "react";

const TeacherUpload = ({ onUpload }) => {
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", selectedFile);
    formData.append("grade", grade);
    formData.append("deadline", deadline);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:5000/api/assignments/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload Response:", data);

      if (data.message === "File uploaded successfully") {
        alert("Assignment uploaded successfully!");
        if (onUpload) {
          onUpload(); // Refresh assignments after upload
        }
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Error uploading file.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload Assignment</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      ></textarea>
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Upload Assignment
      </button>
    </form>
  );
};

export default TeacherUpload;
