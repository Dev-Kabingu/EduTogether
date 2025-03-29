const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  fileType: { type: String, required: true },
  grade: { type: String, required: true },
  deadline: { type: Date, required: true },
  description: { type: String },
  filePath: { type: String, required: true } // Path to the uploaded file
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
