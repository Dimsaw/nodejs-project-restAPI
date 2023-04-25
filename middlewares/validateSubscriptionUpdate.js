const Joi = require("joi");

const validateSubscriptionUpdate = (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};

module.exports = validateSubscriptionUpdate;
