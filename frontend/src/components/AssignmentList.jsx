import { useEffect, useState } from 'react';
import { fetchAssignments, downloadAssignment } from '../api/assignments';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [filterGrade, setFilterGrade] = useState('');

  useEffect(() => {
    const loadAssignments = async () => {
      const data = await fetchAssignments();
      setAssignments(data);
    };
    loadAssignments();
  }, []);

  const filteredAssignments = filterGrade
    ? assignments.filter((assignment) => assignment.grade === filterGrade)
    : assignments;

  return (
    <div className=" border rounded-lg shadow-md p-8">
      <h2 className="text-lg font-bold mb-2">Assignments</h2>
      <select className="p-2 border rounded w-full mb-4" onChange={(e) => setFilterGrade(e.target.value)}>
        <option value="">All Grades</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        <option value="Grade 3">Grade 3</option>
      </select>
      
      <ul>
        {filteredAssignments.map((assignment) => (
          <li key={assignment._id} className="p-2 border-b flex justify-between">
            <div>
              <h3 className="font-bold">{assignment.title}</h3>
              <p>Grade: {assignment.grade}</p>
              <p>Deadline: {new Date(assignment.deadline).toLocaleDateString()}</p>
            </div>
            <button
  className="bg-green-500 text-white px-4 py-2 rounded"
  onClick={() => {
    if (!assignment.filePath) {
      console.error("File path is missing for", assignment.title);
      alert("Download link is unavailable!");
      return;
    }
    downloadAssignment(assignment.filePath);
  }}
>
  Download
</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;
