import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";


const socket = io("http://localhost:5000", { transports: ["websocket"] });

const ChatApp = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
      navigate("/login");
      return;
  }

  try {
      const decoded = jwtDecode(token); 
      setUser(decoded); 
      console.log("Decoded User:", decoded); 
  } catch (error) {
      console.error("Invalid token", error);
      navigate("/login");
  }
}, [navigate]);

useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
        return;
    }

    try {
        const decoded = jwtDecode(token);
        setUser(decoded);
        console.log("Decoded User:", decoded);
    } catch (error) {
        console.error("Invalid token", error);
        navigate("/login");
    }

    socket.emit("fetchMessages");

    socket.on("previousMessages", (msgs) => {
        console.log("Fetched Previous Messages:", msgs);
        setMessages(msgs);
    });

    socket.on("receiveMessage", (msg) => {
        console.log("New Message Received:", msg);
        setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
        socket.off("previousMessages");
        socket.off("receiveMessage");
    };
}, [navigate]);


 
    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && user) {
            const newMessage = { username: `${user.email} (${user.role})`, text: message };

            socket.emit("sendMessage", newMessage);
            setMessage("");
        }
    };

    return (
        <>
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 mt-12 bg-blue-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                EduTogether Group Chat
            </h1>
            <div className="flex flex-col w-full h-100 bg-white border rounded-md p-4 overflow-y-auto">
                {user && messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className={`py-3 px-3 mb-3 rounded-md ${
                            msg.username === `${user.email} (${user.role})`
                                ? "self-end bg-blue-100"
                                : "self-start bg-gray-100"
                        }`}>
                            <p className="text-sm text-gray-700">
                                <strong>{msg.username}: </strong>{msg.text}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-2">
                        No messages yet. Start the conversation!
                    </p>
                )}
            </div>

           
            <form onSubmit={sendMessage} className="flex items-center gap-2 mt-4 w-full">
                <input
                    type="text"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 shadow-md"
                >
                    Send
                </button>
            </form>
        </div>
        
        </>
    );
};

export default ChatApp;
