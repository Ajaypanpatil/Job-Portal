const express = require("express");
const router = express.Router();
const recruiterMiddleware = require("../middlewares/recruiterMiddleware");

router.get("/dashboard", recruiterMiddleware, (req, res) => {
  res.json({ message: "Welcome Recruiter", user: req.user });
});

module.exports = router;
