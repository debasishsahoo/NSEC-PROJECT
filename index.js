const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://localhost:8000']

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
//app.use(cors(corsOptions));

app.use(cors('*'));

app.get('/', (req, res) => {
    res.send('geting called');
})

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


