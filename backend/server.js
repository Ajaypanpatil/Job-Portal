const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");
const connectDB = require('./config/db');



// Models 
const Candidate = require('./models/Candidate');
const Recruiter = require('./models/Recruiter');
const Job = require('./models/Job');
const Application = require('./models/Application');

const errorHandlers = require('./middlewares/errorHandler');

const app = express();

const { errorHandler } = errorHandlers
app.use(errorHandler);



const PORT = process.env.PORT;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});



const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const candidateRoute = require('./routes/candidateRoutes');
app.use('/api/candidate', candidateRoute);

const recruiterRoutes = require("./routes/recruiterRoutes");
app.use("/api/recruiter", recruiterRoutes);






