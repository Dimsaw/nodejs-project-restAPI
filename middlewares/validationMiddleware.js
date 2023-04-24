const Joi = require("joi");
const { ValidationError } = "../helpers/errors.js";

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
  patchValidation,
};
