const { User } = require("../../db/usersModel");
const { WrongsParametersError } = require("../../helpers/errors");

const verify = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new WrongsParametersError("User not found");
  }
  console.log(user);
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
};

module.exports = verify;
