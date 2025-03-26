import { useState, useEffect } from "react";
import axios from "axios";

const Announcements = ({ classLevel }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const { data } = await axios.get(`/api/announcements/${classLevel}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setAnnouncements(data);
      } catch (error) {
        setError("Failed to fetch announcements.");
      }
      setLoading(false);
    };

    fetchAnnouncements();
  }, [classLevel]);

  if (loading) return <p>Loading announcements...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Latest Announcements</h2>
      {announcements.length === 0 ? (
        <p>No announcements available.</p>
      ) : (
        announcements.map((announcement) => (
          <div key={announcement._id} className="border-b p-3">
            <h3 className="text-lg font-bold">{announcement.title}</h3>
            <p>{announcement.description}</p>
            <small className="text-gray-500">
              Posted on {new Date(announcement.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default Announcements;
