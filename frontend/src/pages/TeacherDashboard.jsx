// import CreateAnnouncement from "../components/CreateAnnouncement";

// const TeacherDashboard = () => {
//   console.log("TeacherDashboard is rendering...");

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
//       <p className="text-gray-500">If you see this, the page is rendering correctly.</p>
//       <CreateAnnouncement />
//     </div>
//   );
// };

// export default TeacherDashboard;
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  const [notifications, setNotifications] = useState([
    "New message from a parent",
    "CBC update available",
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Manage Student Progress</h2>
          <Link to="/teacher/students">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Go to Students
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Messages</h2>
          <Link to="/ChatApp">
             <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              View Messages
            </button>
           </Link>

        </div>

        <div className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Class Management</h2>
          <Link to="/teacher/classes">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">
              Manage Classes
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
