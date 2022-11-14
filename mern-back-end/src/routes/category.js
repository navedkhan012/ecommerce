const express = require("express");
const router = express.Router();

const { requireSignIn, adminRequire } = require("../common-middleware");
const { createCategory, getCategory } = require("../controller/category");

router.post("/category", requireSignIn, adminRequire, createCategory);
router.get("/category/get", getCategory);

module.exports = router;
