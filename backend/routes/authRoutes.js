const express = require("express");
const router = express.Router();

const { registerCandidate } = require("../controllers/candidateController");
const { registerRecruiter } = require("../controllers/recruiterController");
const { loginUser } = require("../controllers/authController");

// Candidate Registration
router.post("/candidate/register", registerCandidate);

// Recruiter Registration
router.post("/recruiter/register", registerRecruiter);

// Unified Login for both
router.post("/login", loginUser);

module.exports = router;
