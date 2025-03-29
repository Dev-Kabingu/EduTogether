require("events").EventEmitter.defaultMaxListeners = 20;
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const Message = require("./models/Message");  
const path = require("path");


//Import WebSocket setup properly
const { initializeSocket } = require("./socket");

const app = express();
const server = http.createServer(app);

// Initialize socket.io
initializeSocket(server); 

app.use(cors());
app.use(express.json());

// ✅ Serve uploads folder as static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const authRoutes = require("./routes/authRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const parentRoutes = require("./routes/parentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const meetingRoutes = require("./routes/meetingRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/admin", adminRoutes); 
app.use('/api/admin', adminAuthRoutes);
app.use('/api/assignments', assignmentRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));


app.get("/api/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});


// Serve uploaded files statically
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
