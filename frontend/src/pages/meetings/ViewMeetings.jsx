import { useState, useEffect } from "react";

const ViewMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const res = await fetch("http://localhost:5000/api/meetings", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
      const data = await res.json();
      setMeetings(data);
    };

    fetchMeetings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Meetings</h2>
      <ul className="space-y-4">
        {meetings.map((meeting) => (
          <li key={meeting._id} className="p-4 bg-gray-100 rounded-lg">
            <p>Date: {new Date(meeting.date).toLocaleDateString()}</p>
            <p>Time: {meeting.time}</p>
            <p>Purpose: {meeting.purpose}</p>
            <p>Status: {meeting.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewMeetings;
