const { login } = require("../../models/users/index");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await login(email, password);
  const { token, subscription } = userInfo;
  await res.json({ status: "success", token, user: { email, subscription } });
};

module.exports = loginController;
