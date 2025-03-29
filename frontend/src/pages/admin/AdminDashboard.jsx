import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
  <>
    <div className="p-6 max-w-5xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-6">
      
        <div className="p-4 border rounded shadow-md bg-blue-50">
          <h2 className="text-xl font-semibold">User Management</h2>
          <p>Manage all users (teachers, students, and parents) here. You can add, edit, and delete users to ensure effective communication and smooth operations.</p>
          <Link to="/ManageUsers">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Manage Users</button>
          </Link>
        </div>

        <div className="p-4 border rounded shadow-md bg-blue-50">
          <h2 className="text-xl font-semibold">Schedule Meetings/ Events</h2>
          <p> schedule and manage meetings and events between parents and teachers, ensuring smooth communication and collaboration</p>
          <Link to="/Meeting">
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Schedule</button>
          </Link>
        </div>

        <div className="p-4 border rounded shadow-md bg-blue-50">
          <h2 className="text-xl font-semibold">Messaging</h2>
          <p>View communication between parents and teachers.</p>
          <Link to="/ChatApp">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">View Messages</button>
          </Link>
        </div>

        {/* Reports & Analytics */}
        <div className="p-4 border rounded shadow-md bg-blue-50">
          <h2 className="text-xl font-semibold">Reports & Analytics</h2>
          <Link to="/admin/reports">
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">View Reports</button>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
