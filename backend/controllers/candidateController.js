const Candidate = require('../models/Candidate');
const bcrypt = require('bcrypt');

const registerCandidate = async (req , res) =>{
    try{
        const {name , email , password } = req.body;

        // Check if user already exists
        const existingCandidate = await Candidate.findOne({email});
        if(existingCandidate){
            return res.status(400).json({message : 'Candidate already exists'});
        }

        // hashedPassword 

        const hashedPassword  = await bcrypt.hash(password, 10);

        // create a new candidate 

        const candidate = new Candidate({
            name,
            email,
            password : hashedPassword
        });

        await candidate.save();

        return res.status(200).json


    }catch(error){

    }
}