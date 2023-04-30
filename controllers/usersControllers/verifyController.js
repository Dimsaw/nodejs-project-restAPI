const { verify } = require("../../models/users/index");

const verifyController = async (req, res) => {
  const { verificationToken } = req.params;
  await verify(verificationToken);
  res.json({ message: "Email verify success" });
};

module.exports = verifyController;

// const verifyEmail = async (req, res) => {
//   const { verificationToken } = req.params;
//   const user = await User.findOne({ verificationToken });
//   console.log(user);
//   console.log("fdvfdvdfvd");
//   if (!user) {
//     throw new WrongVerification("Email or password is wrong");
//   }
//   await User.findByIdAndUpdate(user._id, {
//     verify: true,
//     verificationToken: "",
//   });
//   // console.log(user.verify);
//   // console.log("212112212121");
//   res.json({
//     message: "Email verify success",
//   });
// };

// module.exports = verifyEmail;
