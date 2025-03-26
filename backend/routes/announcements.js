const express = require("express");
const router = express.Router();
const Announcement = require("../models/Announcement");
const authMiddleware = require("../middleware/auth");

// ➤ Create an announcement (Teachers only)
router.post("/create", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "teacher") return res.status(403).json({ message: "Access denied" });

    const newAnnouncement = new Announcement({
      title: req.body.title,
      description: req.body.description,
      teacherId: req.user.id,
      classLevel: req.body.classLevel
    });

    await newAnnouncement.save();
    res.status(201).json({ message: "Announcement posted successfully", announcement: newAnnouncement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ Get announcements for a specific class (Parents)
router.get("/:classLevel", authMiddleware, async (req, res) => {
  try {
    const announcements = await Announcement.find({ classLevel: req.params.classLevel }).sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
