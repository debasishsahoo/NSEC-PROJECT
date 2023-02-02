const express = require("express");
const router = express.Router();



//Router PATH
//!Product Related API end Point
router.post("/", protect, createProduct);
router.patch("/:id", protect, updateProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);

module.exports = router; 