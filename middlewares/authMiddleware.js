const jwt = require("jsonwebtoken");
const { User } = require("../db/usersModel");

const { NotAuthorizedError } = require("../helpers/errors");

const authMiddleware = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    console.log(tokenType, token);

    if (!token) {
      next(new NotAuthorizedError("Please, provide a token"));
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);
    if (!(!user || !user.token || user.token !== token)) {
      next(new NotAuthorizedError("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthorizedError("Not authorized"));
  }
};

module.exports = {
  authMiddleware,
};
