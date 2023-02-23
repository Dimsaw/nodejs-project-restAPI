const Joi = require("joi");
// const { ValidationError } = "../helpers/errors.js";

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().min(3).max(30).required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};

module.exports = {
  loginValidation,
};
