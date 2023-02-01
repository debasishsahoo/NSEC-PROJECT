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
        min: [10, "Too Few. Not valid number. Eg. 251-XXX-XXXXXX"],
        max: [10, "Too long. Not valid number. Eg. 251-XXX-XXXXXX"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Password can't be blank"],
        required: [true, "Please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
    },
});


const User = mongoose.model("Users", userSchema);

module.exports = User; 
