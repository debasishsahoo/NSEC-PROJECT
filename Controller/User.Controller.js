const asyncHandler = require("express-async-handler");
const User = require("../Model/User.Model");

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }

    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be up to 6 characters");
    }

    // Check if user email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("Email has already been registered");
    }

    // Create new user
    const user = await User.create({
        name,
        email,
        password,
    });



    //Send Response To User for signup
    if (user) {
        const { _id, name, phone, email, password, bio } = user;
        res.status(201).json({
            _id, name, phone, email, password, bio
        });

    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

})










const loginUser = () => { }
const logout = () => { }
const getUser = () => { }
const updateUser = () => { }
const getUsers = () => { }
const deleteUser = () => { }
const changePassword = () => { }

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    updateUser,
    getUsers,
    deleteUser,
    changePassword
}