const express = require("express");
const Student = require("../models/Student"); // Ensure the correct path

const router = express.Router();

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

// Add a new student
router.post("/", async (req, res) => {
  try {
    const { name, email, grade } = req.body;
    const newStudent = new Student({ name, email, grade });
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: "Error adding student" });
  }
});

// Update a student
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Error updating student" });
  }
});

// Delete a student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting student" });
  }
});

module.exports = router;
