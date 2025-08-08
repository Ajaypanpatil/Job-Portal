const mongoose = require("mongoose");

const candidateSchema  = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },

        email : {
            type : String,
            required : true,
            unique : true
        },

        password :{
            type : String,
            required : true
        },

        resumeUrl :{
            type : String
        },

        profileImageUrl: {
             type: String 
        },

        appliedJobs: [{
            type : mongoose.Schema.Types.ObjectId, ref: "Application"
        }],

     }, { timestamps: true });

     module.exports = mongoose.model('Candidate', candidateSchema);

    