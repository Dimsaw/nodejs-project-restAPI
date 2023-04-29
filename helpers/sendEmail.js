const sgMail = require("@sendgrid/mail");
// const { BASE_URL } = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, verificationToken) => {
  const verifyEmail = {
    to: `${email}`,
    from: "dimsaw85@gmail.com",
    subject: "Thank you for registration",
    text: `<a targe="_blanck" href="${process.env.BASE_URL}/api/users/verify/:${verificationToken}">Click verify email</a>`,
    html: `<a targe="_blanck" href="${process.env.BASE_URL}/api/users/verify/:${verificationToken}">Click verify email</a>`,
  };

  await sgMail
    .send(verifyEmail)
    .then(() => console.log("Email send succeess"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
