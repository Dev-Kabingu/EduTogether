const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

let messages = [];

router.get("/messages", authMiddleware, (req, res) => {
    res.json(messages);
});

router.post("/messages", authMiddleware, (req, res) => {
    const { text } = req.body;
    const message = { user: req.user.name, text };
    messages.push(message);
    res.json({ message: "Message sent", messages });
});

module.exports = router;
