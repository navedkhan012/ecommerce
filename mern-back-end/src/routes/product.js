const express = require("express");
const router = express.Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const { requireSignIn, adminRequire } = require("../common-middleware");
const { createProduct } = require("../controller/product");
const Product = require("../models/product");
const Category = require("../models/category");

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
router.get("/product/get", async (req, res)=>{
 const categories = await Category.find({})
  const products = await Product.find({}).populate({
    path:  'category', select: '_id name'
  }) 
  res.status(200).json({ 
    products,
    categories
  });
});

module.exports = router;
