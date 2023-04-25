const gravatar = require("gravatar");

const {
  signup,
  login,
  logout,
  changeSubscription,
} = require("../models/users/index");

const signupController = async (req, res, next) => {
  const { email, password } = req.body;
  const avatarURL = gravatar.url(email);
  await signup(email, password, avatarURL);

  res.status(201).json({
    status: "success",
    user: {
      email: email,
      subscription: "starter",
      avatarURL,
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
  await logout(_id);
  res.status(204).json({ status: "No Content" });
};

const currentController = async (req, res, next) => {
  const { email } = req.user;
  res.json({ status: "success", email });
};

const changeSubscriptionController = async (req, res, next) => {
  const { _id } = req.user;
  await changeSubscription(_id, req.body);
  res.json({ status: "success" });
};

const ccchangeSubscriptionController = async (req, res, next) => {
  const { _id } = req.user;
  await changeSubscription(_id, req.body);
  res.json({ status: "success" });
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  currentController,
  changeSubscriptionController,
  ccchangeSubscriptionController,
};
