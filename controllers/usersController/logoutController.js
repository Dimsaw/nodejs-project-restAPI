const { logout } = require("../../models/users/index");

const logoutController = async (req, res, next) => {
  const { _id } = req.user;
  await logout(_id);
  res.status(204).json({ status: "No Content" });
};

module.exports = logoutController;
