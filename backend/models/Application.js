const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recruiter",
      required: true,
    },
    resumeUrl: { type: String, required: true }, // candidate's resume at time of applying
    status: { type: String, default: "Pending" }, // Can be 'Pending', 'Viewed', 'Rejected', 'Accepted'
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
