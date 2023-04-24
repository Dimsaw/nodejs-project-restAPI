const { changeSubscription } = require("../../models/users/index");

const changeSubscriptionController = async (req, res, next) => {
  const { _id } = req.user;
  await changeSubscription(_id, req.body);
  res.json({ status: "success" });
};

module.exports = changeSubscriptionController;
