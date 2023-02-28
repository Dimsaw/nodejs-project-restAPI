const { signup, login, logout } = require("../models/users");

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

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await login(email, password);
  const { token, subscription } = userInfo;
  await res.json({ status: "success", token, user: { email, subscription } });
};

const logoutController = async (req, res, next) => {
  const { _id } = req.user;
  const searchUserById = await logout(_id);
  res.json({ status: "success", searchUserById });
};

const currentController = async (req, res, next) => {
  const { email } = req.user;
  res.json({ status: "success", email });
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  currentController,
};
