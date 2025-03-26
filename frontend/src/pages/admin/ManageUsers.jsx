import { Link } from "react-router-dom";

export default function ManageUsers() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>

      <div className="grid grid-cols-3 gap-6">
        <Link to="/ManageTeachers">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Manage Teachers
          </button>
        </Link>
        <Link to="/ManageStudents">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Manage Students
          </button>
        </Link>
        <Link to="/ManageParents">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            Manage Parents
          </button>
        </Link>
      </div>
    </div>
  );
}
