// const mongoose = require("mongoose");

// const parentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   childName: { type: String, required: true },
// });

// const Parent = mongoose.model("Parent", parentSchema);
// module.exports = Parent;
const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobilePhone: { type: String, required: true }, // Add mobile phone field
  childName: { type: String, required: true },
  childGrade: { type: String, required: true },
});

const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
