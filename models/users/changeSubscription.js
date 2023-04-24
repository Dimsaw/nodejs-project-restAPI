const { User } = require("../../db/usersModel");

const changeSubscription = async (_id, { subscription }) => {
  const user = await User.findByIdAndUpdate(_id, {
    $set: { subscription },
  });

  return user;
};

module.exports = changeSubscription;
