const Jimp = require("jimp");

const jimpEditor = async (path, a, b) => {
  const image = await Jimp.read(path);
  await image.resize(a, b);
  await image.writeAsync(path);
};

module.exports = {
  jimpEditor,
};
