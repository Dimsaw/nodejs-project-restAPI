const signupController = async (req, res, next) => {
  //   const { email, password } = req.body;
  console.log(req.body);
};

const loginController = async (req, res, next) => {
  console.log(req.body);
};

const logoutController = async (req, res, next) => {
  console.log(req.body);
};

const currentController = async (req, res, next) => {
  console.log(req.body);
};

module.exports = {
  signupController,
  loginController,
  logoutController,
  currentController,
};
