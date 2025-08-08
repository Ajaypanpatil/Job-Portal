const { model } = require("mongoose");
const Recruiter = require("../models/Recruiter");
const bcrypt = require("bcrypt");

const registerRecruiter = async (req, res) => {

    try {

        const {name, email, password} = req.body;

        const existingRecruiter =  await Recruiter.findOne({email});

        if(existingRecruiter){
            return res.status(400).json({message : "Recruiter already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //  create a new Recruiter

        const recruiter = new Recruiter({
            name,
            email,
            password : hashedPassword,
        });

        await recruiter.save();

        return res
      .status(201)
      .json({ message: "Recruiter registered succesfully" });
        
    }catch(error){
        console.error("Registration error:", error);
    return res.status(500).json({ message: "Server error" });
    }
}

module.exports = { registerRecruiter}