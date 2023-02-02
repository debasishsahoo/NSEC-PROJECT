const asyncHandler = require("express-async-handler");
const User = require("../Model/User.Model");
const jwt = require("jsonwebtoken");

const Auth = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;

        //if token is not present in Cookies
        if (!token) {
            res.status(401);
            throw new Error("Not authorized, please login");
        }

        // Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // Get user id from token
        const user = await User.findById(verified.id).select("-password");

        //if User not found
        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        req.user = user;
        next();


    }
    catch (error) {
        res.status(401);
        throw new Error("Not authorized, please login");
    }
})

module.exports = Auth;