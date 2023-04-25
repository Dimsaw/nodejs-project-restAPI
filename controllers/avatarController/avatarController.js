const path = require("path");
const fs = require("fs/promises");
const { jimpEditor } = require("../../helpers/jimpEditor");
const { User } = require("../../db/usersModel");

const avatarsDir = path.resolve("./public/avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tmpDir, originalname } = req.file;

  const { _id } = req.user;
  const newFilename = `${_id}_${originalname}`;
  const uploadDir = path.join(avatarsDir, newFilename);
  const avatarURL = path.join("avatars", newFilename);

  await jimpEditor(tmpDir, 250, 250);
  await fs.rename(tmpDir, uploadDir);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    status: "success",
    avatarURL: {
      avatarURL,
    },
  });
};

module.exports = updateAvatar;
