

const authMiddleware = require("../middleware/auth");
const express = require("express");
const Announcement = require("../models/Announcement");
const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  console.log("Received announcement creation request:", req.body); 
  console.log("User role:", req.user.role);

  try {
    if (req.user.role !== "teacher") {
      console.log("Access Denied - Not a Teacher");
      return res.status(403).json({ message: "Access denied" });
    }

    const newAnnouncement = new Announcement({
      title: req.body.title,
      description: req.body.description,
      teacherId: req.user.id,
      classLevel: req.body.classLevel,
    });

    await newAnnouncement.save();
    console.log("Announcement saved:", newAnnouncement); 
    res.status(201).json({ message: "Announcement posted successfully", announcement: newAnnouncement });
  } catch (error) {
    console.error("Error posting announcement:", error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
