import { useState } from "react";
import { Link } from "react-router-dom";

export default function ParentDashboard() {
  const [notifications, setNotifications] = useState([
    "Meeting scheduled with the teacher",
    "New CBC report available",
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">View Assignments</h2>
          <p className="text-gray-500">Access all the assignments.</p>
          <Link to="/parent/progress">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              View Assignment
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-500">Open Chat with teachers.</p>
          <Link to ='/ChatApp'>
            <button onClick={() => navigate("/ChatApp")} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              View Messages
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Schedule Meetings / Events</h2>
          <p className="text-gray-500">Details of Upcoming Meetings or Events</p>
          <Link to="/ScheduledMeetings">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
              View Meetings
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p className="text-gray-500">Access assignments and other study resources</p>
          <Link to="/AssignmentPage">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
              View Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
