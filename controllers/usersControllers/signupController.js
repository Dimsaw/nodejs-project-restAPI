const { signup } = require("../../models/users/index");
const gravatar = require("gravatar");

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
module.exports = signupController;
