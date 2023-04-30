const { secondVerify } = require("../../models/users/index");

const secondVerifyController = async (req, res) => {
  const { email } = req.body;
  await secondVerify(email);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = secondVerifyController;
