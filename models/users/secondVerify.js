const { User } = require("../../db/usersModel");
const sgMail = require("@sendgrid/mail");
const { sendEmail } = require("../../helpers/index");

const {
  ThisEmailRegistrated,
  WrongsParametersError,
} = require("../../helpers/errors");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const secondVerify = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new WrongsParametersError("User not found");
  }
  if (user.verify) {
    throw new ThisEmailRegistrated("Verification has already been passed");
  }
  const { verificationToken } = user;

  await sendEmail(email, verificationToken);
  return true;
};
module.exports = secondVerify;
