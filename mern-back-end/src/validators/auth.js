const { check, validationResult } = require("express-validator");

exports.signInValidator = [
  check("email").notEmpty().withMessage("email is wrongggg valid"),
  check("password").notEmpty().withMessage("password is wrongggg valid"),
];

exports.isValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
