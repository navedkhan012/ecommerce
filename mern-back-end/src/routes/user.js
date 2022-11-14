const express = require("express");
const { signup, signin } = require("../controller/user");
const { signInValidator, isValidationResult } = require("../validators/auth");

const router = express.Router();

router.post("/signin", signInValidator, isValidationResult, signin);

router.post("/signup", signup);

router.post("/profile", (req, res) => {
  res.status(200).json({
    message: "profile",
  });
});

module.exports = router;
