const { signup } = require("../../models/users/index");

const signupController = async (req, res, next) => {
  const { email, password } = req.body;
  await signup(email, password);

  res.status(201).json({
    status: "success",
    user: {
      email: email,
      subscription: "starter",
    },
  });
};

module.exports = signupController;
