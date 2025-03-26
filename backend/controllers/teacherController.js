const Teacher = require("../models/Teacher");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers", error });
  }
};

const addTeacher = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newTeacher = new Teacher({ name, email });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(400).json({ message: "Error adding teacher", error });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: "Error updating teacher", error });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting teacher", error });
  }
};

module.exports = { getAllTeachers, addTeacher, updateTeacher, deleteTeacher };
