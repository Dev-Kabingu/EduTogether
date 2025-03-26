// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: String,
//   grade: String,
//   parentId: mongoose.Schema.Types.ObjectId,
// });

// module.exports = mongoose.model("Student", studentSchema);
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Parent", required: true }, // Reference to Parent
});

module.exports = mongoose.model("Student", StudentSchema);
