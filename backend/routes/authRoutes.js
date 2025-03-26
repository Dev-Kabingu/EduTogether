// // const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");
// // const router = express.Router();

// // // Signup Route
// // router.post("/signup", async (req, res) => {
// //     const { name, email, password, role } = req.body;

// //     try {
// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) return res.status(400).json({ error: "User already exists" });

// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         const user = new User({ name, email, password: hashedPassword, role });
// //         await user.save();

// //         // Generate JWT token
// //         const token = jwt.sign(
// //             { id: user._id, name: user.name, role: user.role },
// //             process.env.JWT_SECRET,
// //             { expiresIn: "1h" }
// //         );

// //         res.status(201).json({ message: "User registered", token, user });
// //     } catch (err) {
// //         res.status(500).json({ error: "Something went wrong" });
// //     }
// // });


// // // Login Route
// // router.post("/login", async (req, res) => {
// //     const { email, password } = req.body;

// //     try {
// //         const user = await User.findOne({ email });

// //         // If user does not exist or password is incorrect, return an error
// //         if (!user || !(await bcrypt.compare(password, user.password))) {
// //             return res.status(400).json({ error: "Invalid email or password" });
// //         }

// //     // Generate JWT token
// // const token = jwt.sign(
// //     { id: user._id, name: user.name, email: user.email, role: user.role }, 
// //     process.env.JWT_SECRET,
// //     { expiresIn: "1h" }
// // );


// //         res.status(200).json({ message: "Login successful", token, user });
// //     } catch (err) {
// //         console.error("Login Error:", err);
// //         res.status(500).json({ error: "Something went wrong" });
// //     }
// // });

// // module.exports = router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const Teacher = require("../models/Teacher");
// const Parent = require("../models/Parent");

// const router = express.Router();

// // Signup Route
// router.post("/signup", async (req, res) => {
//     const { name, email, password, role } = req.body;

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ error: "User already exists" });

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user in the Users collection
//         const user = new User({ name, email, password: hashedPassword, role });
//         await user.save();

//         // Automatically add to the correct collection based on role
//         if (role === "teacher") {
//             const teacher = new Teacher({ name, email });
//             await teacher.save();
//         } else if (role === "parent") {
//             const parent = new Parent({ name, email });
//             await parent.save();
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id, name: user.name, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.status(201).json({ message: "User registered", token, user });
//     } catch (err) {
//         res.status(500).json({ error: "Something went wrong" });
//     }
// });

// // Login Route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         // If user does not exist or password is incorrect, return an error
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(400).json({ error: "Invalid email or password" });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id, name: user.name, email: user.email, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.status(200).json({ message: "Login successful", token, user });
//     } catch (err) {
//         console.error("Login Error:", err);
//         res.status(500).json({ error: "Something went wrong" });
//     }
// });
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Teacher = require("../models/Teacher");
const Parent = require("../models/Parent");
const Student = require("../models/Student");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password, role, mobilePhone, childName, childGrade } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        let savedParent = null;

        // Add to correct collection based on role
        if (role === "parent") {
            savedParent = new Parent({ name, email, mobilePhone, childName, childGrade });
            await savedParent.save();

            // Create a student linked to the parent
            const newStudent = new Student({
                name: childName,
                email: `${childName.toLowerCase()}@example.com`, // Generating an email dynamically
                grade: childGrade,
                parentId: savedParent._id, // Linking student to parent
            });
            await newStudent.save();
        } else if (role === "teacher") {
            const teacher = new Teacher({ name, email, mobilePhone });
            await teacher.save();
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({ message: "User registered successfully", token, user });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // If user does not exist or password is incorrect, return an error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, name: user.name, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token, user });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

module.exports = router;
