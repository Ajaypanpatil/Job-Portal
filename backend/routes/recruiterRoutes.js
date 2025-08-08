const express = require("express");
const router = express.Router();

const {registerRecruiter} = require("../controllers/recruiterController");

router.post('/register',registerRecruiter)

module.exports = router;
