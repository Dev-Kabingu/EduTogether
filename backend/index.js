require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "http://localhost:5173" } }); // Set correct frontend origin

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Route to Fetch All Messages
app.get("/api/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});

// Handle WebSocket Messaging
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Handle Public Messages
    socket.on("sendMessage", async (msg) => {
        try {
            const newMessage = new Message({ username: msg.username, text: msg.text });
            await newMessage.save();
            io.emit("receiveMessage", newMessage); // Broadcast to all users
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });

    // Handle Private Messages
    socket.on("privateMessage", ({ sender, recipient, text }) => {
        io.to(recipient).emit("receivePrivateMessage", { sender, text });
    });

    // Handle Disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
