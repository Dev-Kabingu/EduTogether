const express = require("express");
const router = express.Router();
const TeacherController = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");

// Fetch all teachers
router.get("/", authMiddleware, TeacherController.getAllTeachers);

// Create a new teacher
router.post("/", authMiddleware, TeacherController.createTeacher);

// Delete a teacher
router.delete("/:id", authMiddleware, TeacherController.deleteTeacher);

// Update a teacher
router.put("/:id", authMiddleware, TeacherController.updateTeacher);

module.exports = router;
