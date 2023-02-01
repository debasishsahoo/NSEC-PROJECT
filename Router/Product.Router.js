const express = require("express");
const router = express.Router();


router.get("/", getAllProduct);
router.post("/", createProduct);
router.get("/:id", getProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;