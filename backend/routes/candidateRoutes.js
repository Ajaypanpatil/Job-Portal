const express = require("express");
const router = express.Router();
const authenticateUser = require("../middlewares/authMiddleware");

router.get("/dashboard", authenticateUser, (req, res) => {
  if (req.user.role !== "candidate") {
    return res.status(403).json({ message: "Access denied" });
  }

  // Now user is authenticated and role is candidate
  res.json({ message: "Candidate dashboard accessed", user: req.user });
});

module.exports = router;
