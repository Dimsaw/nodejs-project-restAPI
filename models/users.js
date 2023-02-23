const { User } = require("../db/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  NotAuthorizedError,
  ThisEmailRegistrated,
} = require("../helpers/errors");

const signup = async (email, password) => {
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new ThisEmailRegistrated("Email in use");
  }
  const user = new User({ email, password });
  await user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
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

const current = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError("Email or password is wrong");
  }
  return user;
};

module.exports = {
  signup,
  login,
  current,
};
