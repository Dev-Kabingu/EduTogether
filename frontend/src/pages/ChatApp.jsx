import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch previous messages from the server
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5173/messages"); // Replace with your backend URL
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };

    fetchMessages();

    // Listen for new messages
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup when component unmounts
    return () => {
      socket.off("chat message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username.trim()) {
      const newMessage = { username, text: message };
      socket.emit("chat message", newMessage); // Emit message to the server
      setMessage(""); // Clear message input
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        EduTogether Group Chat
      </h1>

      {/* Username Input */}
      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Chat Display */}
      <div className="flex flex-col w-full h-80 bg-white border rounded-md p-4 overflow-y-auto">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`py-1 px-3 mb-2 rounded-md ${
                msg.username === username
                  ? "self-end bg-blue-100"
                  : "self-start bg-gray-100"
              }`}
            >
              <p className="text-sm text-gray-700">
                <strong>{msg.username}: </strong>
                {msg.text}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-2">No messages yet. Start the conversation!</p>
        )}
      </div>

      {/* Message Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center gap-2 mt-4 w-full"
      >
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
  );
};

export default ChatApp;
