const { signup, login, current } = require("../models/users");

const signupController = async (req, res, next) => {
  //   const { email, password } = req.body;
  console.log(req.body);
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
  console.log(res.body);
  const token = await login(email, password);
  await res.json({ status: "success", token });
};

const logoutController = async (req, res, next) => {
  console.log(req.body);
};

const currentController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await current(email, password);
  const token = await loginController();
  await res.json({ status: "success", user, token });
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  currentController,
};
