const { User } = require("../../db/usersModel");

const logout = async (_id) => {
  const user = await User.findByIdAndUpdate(_id, { token: null });
  return user;
};

module.exports = logout;
