// const mongoose = require("mongoose");

// const announcementSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   message: { type: String, required: true },
//   target: { type: String, enum: ["class", "grade", "school"], required: true },
//   targetId: { type: mongoose.Schema.Types.ObjectId, refPath: "targetRef" }, // Class or Grade reference
//   targetRef: { type: String, enum: ["Class", "Grade"] }, // Dynamic reference
//   teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Announcement", announcementSchema);
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    target: { type: String, required: true },  // Ensure "target" is the correct field
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Announcement", announcementSchema);
