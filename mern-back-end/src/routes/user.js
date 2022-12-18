const express = require("express");
const { requireSignIn } = require("../common-middleware");
const { signup, signin, signout } = require("../controller/user");
const { signInValidator, isValidationResult } = require("../validators/auth");

const router = express.Router();

router.post("/signin", signInValidator, isValidationResult, signin);
router.post("/signup", signInValidator, signup);
router.post("/signout", signout);

 

module.exports = router;
