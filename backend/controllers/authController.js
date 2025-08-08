const Candidate = require("../models/Candidate");
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = null;
    let role = null;

    // 1. Check Candidate first
    user = await Candidate.findOne({ email });
    if (user) {
      role = "candidate";
    } else {
      // 2. Check Recruiter
      user = await Recruiter.findOne({ email });
      if (user) {
        role = "recruiter";
      }
    }

    // 3. If no user found in both
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 4. Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 5. Create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        role: role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 6. Respond
    return res.status(200).json({
      message: "Login successful",
      token,
      role,
      name: user.name,
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
