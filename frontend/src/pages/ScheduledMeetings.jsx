import React, { useEffect, useState } from "react";
import MeetingsList from "../components/MeetingsList";

const ScheduledMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/meetings"); 
        if (!response.ok) throw new Error("Failed to fetch meetings");

        const data = await response.json();
        setMeetings(data.meetings || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) return <div>Loading meetings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-blue-50 p-4">
    <h1 className="font-bold text-2xl mb-4 text-blue-500">Scheduled Meetings</h1>
    <p className="text-gray-600 text-xl mb-2">Our Upcoming Meetings and Events details</p>
    {meetings.length > 0 ? (
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting._id}
            className="p-4 bg-white rounded-lg shadow-md mb-4"  // Styling to separate each meeting
          >
            <h3 className="font-semibold text-lg mb-4 text-blue-500">{meeting.title}</h3>
            <p className="text-sm text-gray-600">{meeting.description}</p>
            <p className="text-sm mt-4">
              Date: {new Date(meeting.date).toLocaleDateString()} | Time:{" "}
              {meeting.time}
            </p>
          </div>
        ))}
      </div>
    ) : (
      <p>No meetings scheduled.</p>
    )}
  </div>
  );
};

export default ScheduledMeetings;
