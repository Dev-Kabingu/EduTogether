// const express = require("express");
// const Parent = require("../models/Parent.js");

// const router = express.Router();

// // Get all parents
// router.get("/", async (req, res) => {
//   const parents = await Parent.find();
//   res.json(parents);
// });

// // Add a new parent
// router.post("/", async (req, res) => {
//   const { name, email, childName } = req.body;
//   const newParent = new Parent({ name, email, childName });
//   const savedParent = await newParent.save();
//   res.json(savedParent);
// });

// // Update a parent
// router.put("/:id", async (req, res) => {
//   const updatedParent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedParent);
// });

// // Delete a parent
// router.delete("/:id", async (req, res) => {
//   await Parent.findByIdAndDelete(req.params.id);
//   res.json({ message: "Parent deleted" });
// });

// module.exports = router; 
const express = require("express");
const Parent = require("../models/Parent");
const router = express.Router();

// Get all parents
router.get("/", async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching parents", error });
  }
});

// Add a new parent
router.post("/", async (req, res) => {
  try {
    const { name, email, childName } = req.body;
    const newParent = new Parent({ name, email, childName });
    await newParent.save();
    res.status(201).json(newParent);
  } catch (error) {
    res.status(400).json({ message: "Error adding parent", error });
  }
});

// Update a parent
router.put("/:id", async (req, res) => {
  try {
    const updatedParent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedParent);
  } catch (error) {
    res.status(500).json({ message: "Error updating parent", error });
  }
});

// Delete a parent
router.delete("/:id", async (req, res) => {
  try {
    await Parent.findByIdAndDelete(req.params.id);
    res.json({ message: "Parent deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting parent", error });
  }
});

module.exports = router;
