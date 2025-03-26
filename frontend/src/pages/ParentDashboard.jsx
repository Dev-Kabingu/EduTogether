// import Announcements from "../components/Announcements";

// const ParentDashboard = () => {
//   console.log("ParentDashboard is rendering...");

//   const classLevel = "Grade 5"; 

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Parent Dashboard</h1>
//       <p className="text-gray-500">If you see this, the page is rendering correctly.</p>
//       <Announcements classLevel={classLevel} />
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ParentDashboard() {
  const [notifications, setNotifications] = useState([
    "Meeting scheduled with the teacher",
    "New CBC report available",
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Parent Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">View Child's Progress</h2>
          <Link to="/parent/progress">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              View Progress
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <Link >
            <button onClick={() => navigate("/ChatApp")} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              View Messages
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Schedule Meetings</h2>
          <Link to="/parent/meetings">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
              Schedule Now
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <ul className="mt-2 text-sm text-gray-600">
            {notifications.map((note, index) => (
              <li key={index} className="mt-1">- {note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
