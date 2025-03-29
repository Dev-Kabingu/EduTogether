import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto mt-12">
            <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

            <div className="grid grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-500">Open Chat with parents.</p>
          <Link to="/ChatApp">
             <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              View Messages
            </button>
           </Link>
        </div>
           
        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p className="text-gray-500">Upload Assignments and other resources.</p>
          <Link to="/TeacherUpload">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Uplaod Assignments
            </button>
          </Link>
        </div>

        <div className="border p-4 rounded-lg shadow bg-blue-50">
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p className="text-gray-500">View all the uploaded assignments and other resources.</p>
          <Link to="/AssignmentPage">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded bg-purple-400">
              view Uploaded Assignments
            </button>
          </Link>
        </div>

                <div className="border p-4 rounded-lg shadow bg-blue-50">
                    <h2 className="text-xl font-semibold">View Scheduled Meetings / Event</h2>
                    <p className="text-gray-500">Upcoming Meetings or Events</p>
                    <Link to="/ScheduledMeetings">
                        <button className="mt-4 px-4 py-2  bg-yellow-500 0 text-white rounded">
                            View Meetings
                        </button>
                    </Link>
                </div>

                <div className="border p-4 rounded-lg shadow bg-blue-50">
                    <h2 className="text-xl font-semibold">View Announcements</h2>
                    {announcements.length === 0 ? (
                        <p className="text-gray-500">No announcements yet.</p>
                    ) : (
                        <ul className="mt-2 text-sm text-gray-600">
                            {announcements.map((announcement) => (
                                <li key={announcement._id} className="border-b py-2">
                                    <strong>{announcement.title}</strong> - {announcement.classLevel}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
