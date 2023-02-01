const express = require("express");
const router = express.Router();


router.get("/", getAllUser);
router.post("/", createUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signout", signout);

module.exports = router;