import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* User Management */}
        <div className="p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold">User Management</h2>
          <Link to="/ManageUsers">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Manage Users</button>
          </Link>
        </div>

        {/* Class & Grade Management */}
        <div className="p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold">Class & Grade Management</h2>
          <Link to="/admin/manage-classes">
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Manage Classes</button>
          </Link>
        </div>

        {/* Messaging Control */}
        <div className="p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold">Messaging Control</h2>
          <Link to="/admin/messages">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded">View Messages</button>
          </Link>
        </div>

        {/* Reports & Analytics */}
        <div className="p-4 border rounded shadow-md">
          <h2 className="text-xl font-semibold">Reports & Analytics</h2>
          <Link to="/admin/reports">
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">View Reports</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
