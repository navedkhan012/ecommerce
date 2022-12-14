const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User already have account",
      });
    }
    const { firstName, lastName, email, password } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName: Math.random().toString(),
    });
    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "something is wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          user: data,
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword) {
        var token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );
        const { _id, firstName, lastName, role, email } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            role,
            email,
          },
        });
      } else {
        return res.status(400).json({
          message: "something is wrong in user sign in",
        });
      }
    } else {
      return res.status(400).json({
        message: "something is wrong",
      });
    }
  });
};
