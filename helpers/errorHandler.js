const { checkError } = require("./errors");

const errorHandler = (error, req, res, next) => {
  if (error instanceof checkError) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: error.message });
};

module.exports = errorHandler;
