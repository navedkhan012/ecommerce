const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

exports.requireSignIn = (req, res, next) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;

  next();
};

exports.adminRequire = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "only admin can add category" });
  }
  next();
};
