const currentController = async (req, res, next) => {
  const { email } = req.user;
  res.json({ status: "success", email });
};

module.exports = currentController;
