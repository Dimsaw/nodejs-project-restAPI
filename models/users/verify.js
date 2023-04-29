const { User } = require("../../db/usersModel");
const { WrongVerification } = require("../../helpers/errors");

const verify = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw WrongVerification(404);
  }
  console.log(user);
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
};

module.exports = verify;
