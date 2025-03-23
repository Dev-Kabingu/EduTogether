const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/chatapp", { useNewUrlParser: true, useUnifiedTopology: true });
const MessageSchema = new mongoose.Schema({
  username: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", MessageSchema);

// REST API to fetch past messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 }); // Sort by timestamp
    res.json(messages);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for new chat messages
  socket.on("chat message", async (msg) => {
    const message = new Message(msg);
    await message.save(); // Save message to database
    io.emit("chat message", msg); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
