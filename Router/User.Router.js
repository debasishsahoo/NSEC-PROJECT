const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    logout,
    getUser,
    updateUser,
    getUsers,
    deleteUser,
    changePassword
} = require("../Controller/User.Controller");


router.get("/", getUsers);
router.post("/:id", changePassword);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/signin", loginUser);
router.post("/signup", registerUser);
router.post("/signout", logout);

module.exports = router;