const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    logout,
    getUser,
    updateUser,
    changePassword,
} = require("../Controller/User.Controller");

const Auth = require("../Middleware/Auth.Handler")


//Router PATH
//!SignUp & Login Related API End Point
router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/logout", logout);
//router.get("/loggedin", loginStatus);

//!User Related API End Point
router.get("/getuser", Auth, getUser);
router.patch("/updateuser", updateUser);

//!Password Related API End Point
router.patch("/changepassword", changePassword);
//router.post("/forgotpassword", forgotPassword);
//router.put("/resetpassword/:resetToken", resetPassword);


module.exports = router;