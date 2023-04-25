const { User } = require("../../db/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { NotAuthorizedError } = require("../../helpers/errors");

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  const { subscription } = user;

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  return { token, subscription };
};

module.exports = login;
