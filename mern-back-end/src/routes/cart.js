const express = require("express");
const router = express.Router();

const { requireSignIn, adminRequire } = require("../common-middleware");
const { addItemToCart } = require("../controller/cart");

router.post("/cart/addtocart", requireSignIn, addItemToCart);

module.exports = router;
