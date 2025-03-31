import { useEffect, useState } from "react";

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/assignments");
        if (!response.ok) {
          throw new Error("Failed to fetch assignments");
        }
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, []);

  // const handleDownload = (filepath) => {
  //     if (!filePath) {
  //   alert("File path is missing!");
  //   return;
  // }

  //   const fileUrl = `http://localhost:5000/uploads/${filepath}`;
  //   const link = document.createElement("a");
  //   link.href = fileUrl;
  //   link.download = filepath.split("/").pop(); // Ensures the file is downloaded with its original name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const handleDownload = (filepath) => {
    if (!filepath) { // Fix: Use the correct parameter name
      alert("File path is missing!");
      return;
    }
  
    const fileUrl = `http://localhost:5000${filepath}`;
    console.log("Downloading file from:", fileUrl); // Debugging output
  
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filepath.split("/").pop(); // Extract filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="space-y-4">
      {assignments.length === 0 ? (
        <p className="text-gray-500">No assignments available</p>
      ) : (
        assignments.map((assignment) => (
          <div key={assignment._id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{assignment.title}</h2>
            <p className="text-sm text-gray-600">Grade: {assignment.grade}</p>
            <p className="text-sm text-gray-600">
              Deadline: {new Date(assignment.deadline).toLocaleDateString()}
            </p>
            <p className="mt-2">{assignment.description}</p>
            
            {/* Download Button */}
            <button
              onClick={() => handleDownload(assignment.file)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Download Assignment
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AssignmentList;
