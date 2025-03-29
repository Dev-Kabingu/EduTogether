import { useState, useEffect } from "react";

const RequestMeeting = () => {
  const [parents, setParents] = useState([]);
  const [parentId, setParentId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");

  useEffect(() => {
    const fetchParents = async () => {
      const res = await fetch("http://localhost:5000/api/parents");
      const data = await res.json();
      setParents(data);
    };

    fetchParents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/meetings/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ parentId, date, time, purpose }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Request Meeting</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select onChange={(e) => setParentId(e.target.value)} required className="w-full p-2 border rounded">
          <option>Select Parent</option>
          {parents.map((parent) => (
            <option key={parent._id} value={parent._id}>{parent.name}</option>
          ))}
        </select>
        <input type="date" onChange={(e) => setDate(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="time" onChange={(e) => setTime(e.target.value)} required className="w-full p-2 border rounded" />
        <textarea onChange={(e) => setPurpose(e.target.value)} placeholder="Purpose" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Request Meeting</button>
      </form>
    </div>
  );
};

export default RequestMeeting;
