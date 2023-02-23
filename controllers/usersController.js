const { signup, login } = require("../models/users");

const signupController = async (req, res, next) => {
  //   const { email, password } = req.body;
  console.log(req.body);
  const { email, password } = req.body;
  await signup(email, password);

  res.status(201).json({ status: "success" });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await login(email, password);
  res.json({ status: "success", token });
};

const logoutController = async (req, res, next) => {
  console.log(req.body);
};

const currentController = async (req, res, next) => {
  console.log(req.body);
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  currentController,
};
