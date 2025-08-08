const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/authController");

// Unified Login for both
router.post("/login", loginUser);

module.exports = router;
