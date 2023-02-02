//!Package we to create Backend Server for API Development
const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");









//! Error Handle 
const errorHandler = require("./src/Middleware/Error.Handler");

//! Cookies Handle
const cookieParser = require("cookie-parser");

//! Router Block
const userRoute = require("./src/Router/User.Router");


const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGO_URI


//! Create Express App
const app = express();






//! Configure APP
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:3000"], credentials: true,
    })
);






//! Health Check
app.get("/", (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }
    try {
        res.status(200).send(data);
    } catch (error) {
        data.message = error;
        res.status(503).send();
    }

});

//! Route Request
app.use('/api/user', userRoute)





// Error Middleware
app.use(errorHandler);

mongoose.set('strictQuery', true)
//! Start Server on 5000



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}).catch((err) => console.log(err));



