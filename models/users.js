const { User } = require("../db/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { NotAuthorizedError } = require("../helpers/errors");

const signup = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError("Email or password is wrong");
  }

  const token = jwt.sign(
    {
      _id: user.id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET
  );
  return token;
};

module.exports = {
  signup,
  login,
};
