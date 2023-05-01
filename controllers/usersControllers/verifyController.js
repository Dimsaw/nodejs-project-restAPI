const { verify } = require("../../models/users/index");

const verifyController = async (req, res) => {
  const { verificationToken } = req.params;
  await verify(verificationToken);
  res.json({ message: "Email verify success" });
};

module.exports = verifyController;
