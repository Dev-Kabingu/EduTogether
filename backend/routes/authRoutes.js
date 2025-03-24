const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({ message: "User registered", token, user });
    } catch (err) {
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
