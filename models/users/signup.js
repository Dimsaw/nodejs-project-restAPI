const { User } = require("../../db/usersModel");
const shortid = require("shortid");
const sgMail = require("@sendgrid/mail");
const { sendEmail } = require("../../helpers/index");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const { ThisEmailRegistrated } = require("../../helpers/errors");

const signup = async (email, password) => {
  const checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new ThisEmailRegistrated("Email in use");
  }

  const verificationToken = shortid.generate();
  const user = new User({ email, password, verificationToken });
  await user.save();

  await sendEmail(email, verificationToken);
};

module.exports = signup;
