const express = require("express");
const mongoose = require("mongoose");
const Announcement = require("../models/Announcement");

const router = express.Router();

// POST: Create Announcement
router.post("/create", async (req, res) => {
    try {
        console.log("🔹 Received Request Body:", req.body); // ✅ Debug incoming data

        const { title, message, target } = req.body;

        // 🔹 Check if required fields are missing
        if (!title || !message || !target) {
            console.log("❌ Missing Fields:", { title, message, target });
            return res.status(400).json({ message: "All fields are required" });
        }

        // 🔹 Create and save announcement
        const newAnnouncement = new Announcement({ title, message, target });

        console.log("🔹 Saving Announcement:", newAnnouncement); // ✅ Debug before saving
        await newAnnouncement.save();

        console.log("✅ Announcement Saved:", newAnnouncement);
        return res.status(201).json({ message: "Announcement created successfully", announcement: newAnnouncement });

    } catch (error) {
        console.error("🚨 Server Error:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
