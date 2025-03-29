// import React, { useState, useEffect } from "react";
// import { scheduleMeeting, fetchMeetings } from "../../api/api";

// const Meetings = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [attendees, setAttendees] = useState([]); // ✅ Add attendees
//   const [meetings, setMeetings] = useState([]);

//   useEffect(() => {
//     loadMeetings();
//   }, []);

//   const loadMeetings = async () => {
//     try {
//       const res = await fetchMeetings();
//       setMeetings(res.data.meetings);
//     } catch (error) {
//       console.error("❌ Error fetching meetings:", error);
//     }
//   };

//   const handleScheduleMeeting = async (e) => {
//     e.preventDefault();

//     // ✅ Ensure all fields are filled
//     if (!title || !description || !date || !time || attendees.length === 0) {
//       alert("⚠️ Please fill all fields including attendees.");
//       return;
//     }

//     try {
//       console.log("📩 Sending Meeting Data:", { title, description, date, time, attendees });

//       await scheduleMeeting({ title, description, date, time, attendees });

//       setTitle("");
//       setDescription("");
//       setDate("");
//       setTime("");
//       setAttendees([]);

//       loadMeetings();
//     } catch (error) {
//       console.error("❌ Error scheduling meeting:", error);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Schedule a Meeting/Event</h2>
//       <form onSubmit={handleScheduleMeeting} className="mb-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="p-2 border rounded w-64 mr-2"
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="p-2 border rounded w-64 mr-2"
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="p-2 border rounded w-64 mr-2"
//         />
//         <input
//           type="time"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//           className="p-2 border rounded w-64 mr-2"
//         />
//         <button type="submit" className="bg-green-500 text-white p-2 rounded">
//           Schedule
//         </button>
//       </form>

//       <h2 className="text-2xl font-bold mb-4">Scheduled Meetings</h2>
//       <ul className="bg-white p-4 rounded shadow">
//         {meetings.map((meeting) => (
//           <li key={meeting._id} className="border-b p-2">
//             <b>{meeting.title}</b> - {new Date(meeting.date).toLocaleDateString()} {meeting.time}
//             <p>{meeting.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Meetings;
import React, { useState, useEffect } from "react";
import { scheduleMeeting, fetchMeetings, updateMeeting, deleteMeeting } from "../../api/api";

const Meetings = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);

  useEffect(() => {
    loadMeetings();
  }, []);

  const loadMeetings = async () => {
    try {
      const res = await fetchMeetings();
      setMeetings(res.data.meetings);
    } catch (error) {
      console.error("❌ Error fetching meetings:", error);
    }
  };

  const handleScheduleMeeting = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!title || !description || !date || !time || attendees.length === 0) {
      alert("⚠️ Please fill all fields including attendees.");
      return;
    }

    try {
      console.log("📩 Sending Meeting Data:", { title, description, date, time, attendees });

      if (editingMeeting) {
        // Updating existing meeting
        await updateMeeting(editingMeeting._id, { title, description, date, time, attendees });
      } else {
        // Scheduling new meeting
        await scheduleMeeting({ title, description, date, time, attendees });
      }

      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setAttendees([]);
      setEditingMeeting(null); // Reset after successful schedule/update
      loadMeetings(); // Reload meetings
    } catch (error) {
      console.error("❌ Error scheduling or updating meeting:", error);
    }
  };

  const handleEditMeeting = (meeting) => {
    setEditingMeeting(meeting);
    setTitle(meeting.title);
    setDescription(meeting.description);
    setDate(meeting.date);
    setTime(meeting.time);
    setAttendees(meeting.attendees);
  };

  const handleDeleteMeeting = async (id) => {
    try {
      await deleteMeeting(id);
      loadMeetings(); // Reload meetings after deletion
    } catch (error) {
      console.error("❌ Error deleting meeting:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">
        {editingMeeting ? "Edit Meeting/Event" : "Schedule a Meeting/Event"}
      </h2>
      <form onSubmit={handleScheduleMeeting} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded w-64 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded w-64 mr-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded w-64 mr-2"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border rounded w-64 mr-2"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          {editingMeeting ? "Update Meeting" : "Schedule Meeting"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">Scheduled Meetings</h2>
      <ul className="bg-white p-4 rounded shadow">
        {meetings.map((meeting) => (
          <li key={meeting._id} className="border-b p-2">
            <b>{meeting.title}</b> - {new Date(meeting.date).toLocaleDateString()} {meeting.time}
            <p>{meeting.description}</p>
            <button
              onClick={() => handleEditMeeting(meeting)}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteMeeting(meeting._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meetings;
