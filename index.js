const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./Router/User.Router")
const productRouter = require("./Router/Product.Router")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());


//Allowed Only this two url to comunicate
const whitelist = ['http://localhost:3000', 'http://localhost:8000']
//Check for incoming request

const corsOption1 = {
    origin: ["http://localhost:3000"], credentials: true,
}

const corsOptions2 = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
//Enable cors with all Opttions

//app.use(cors(corsOptions1));
//app.use(cors(corsOptions2));


//Accept All request 
app.use(cors('*'));


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




const PORT = 5000;
const DB_URL = "mongodb://localhost:27017/nsecdb"


mongoose.connect(DB_URL)
    .then(
        app.listen(PORT, () => { console.log(`Application is runing on ${PORT}`) })
    )
    .catch((error) => {
        console.log(`Db is not connected`)
        console.log(error)
    })


