const { User } = require("../../db/usersModel");

const { ThisEmailRegistrated } = require("../../helpers/errors");

const signup = async (email, password) => {
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new ThisEmailRegistrated("Email in use");
  }
  const user = new User({ email, password });
  await user.save();
};

module.exports = signup;
