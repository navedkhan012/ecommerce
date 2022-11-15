const express = require("express");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const { requireSignIn, adminRequire } = require("../common-middleware");
const { createProduct } = require("../controller/product");

   const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product",
  requireSignIn,
  upload.array("productPicture"),
  createProduct
);
// router.get("/product/get", getCategory);

module.exports = router;
