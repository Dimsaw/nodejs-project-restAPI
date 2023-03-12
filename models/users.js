const { User } = require("../db/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  NotAuthorizedError,
  ThisEmailRegistrated,
} = require("../helpers/errors");

const signup = async (email, password, avatarURL) => {
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new ThisEmailRegistrated("Email in use");
  }

  // const hashPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password, avatarURL });
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
  const { subscription } = user;

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  return { token, subscription };
};

const logout = async (_id) => {
  const user = await User.findByIdAndUpdate(_id, { token: null });
  return user;
};

const changeSubscription = async (_id, { subscription }) => {
  const user = await User.findByIdAndUpdate(_id, {
    $set: { subscription },
  });

  return user;
};

module.exports = {
  signup,
  login,
  logout,
  changeSubscription,
};
