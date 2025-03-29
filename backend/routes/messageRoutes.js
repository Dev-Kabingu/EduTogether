const express = require("express");
const { createMeeting, getMeetings, getMeetingById, updateMeeting, deleteMeeting } = require("../controllers/meetingController");

const router = express.Router();

// Create a new meeting
router.post("/create", createMeeting);

// Get all meetings
router.get("/", getMeetings);

// Get a single meeting by ID
router.get("/:id", getMeetingById);

// Update a meeting
router.put("/:id", updateMeeting);

// Delete a meeting
router.delete("/:id", deleteMeeting);

module.exports = router;
