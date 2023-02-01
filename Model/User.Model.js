const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: [true, "Name Already Exists"],
    },
    phone: {
        type: String,
        required: [true, "User phone number required"],
        default: "+91",
        min: [10, "Too Few. Not valid number. Eg. 251-XXX-XXXXXX"],
        max: [12, "Too long. Not valid number. Eg. 251-XXX-XXXXXX"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: [true, "Email already exists"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"],
        required: [true, "Please add a password"],
        minLength: [6, "Password must be atleast 6 characters"],
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio",
    }
}, { timestamps: true });


const User = mongoose.model("Users", userSchema);

module.exports = User; 
