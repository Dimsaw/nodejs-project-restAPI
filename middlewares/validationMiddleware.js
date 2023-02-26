const Joi = require("joi");
const { ValidationError } = "../helpers/errors.js";

const addValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    phone: Joi.string().min(3).max(30).required(),
    favorite: Joi.boolean(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: "you need to fill in all fields" });
  }
  next();
};

const patchValidation = (req, res, next) => {
  const schema = Joi.object({
    favorite: Joi.boolean().required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(JSON.stringify(validationResult.error.details)));
  }
  next();
};

module.exports = {
  addValidation,
  patchValidation,
};
