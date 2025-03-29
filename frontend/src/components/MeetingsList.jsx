import React from "react";

const MeetingsList = ({ meetings = [] }) => { 
  if (!Array.isArray(meetings)) {
    console.error("MeetingsList expected an array but got:", meetings);
    return <p>Error: Invalid data format for meetings.</p>;
  }

  if (meetings.length === 0) {
    return <p>No scheduled meetings.</p>;
  }

  return (
    <div>
      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting._id}>
            <div>
              <h3>{meeting.title}</h3>
              <p>{meeting.description}</p>
              <p>
                Date: {new Date(meeting.date).toLocaleDateString()} | Time:{" "}
                {meeting.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingsList;
