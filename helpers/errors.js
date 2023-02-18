class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class WrongsParametersError extends Error {
  constructor(message) {
    super(message);

    this.status = 404;
  }
}

const checkContactById = (contactById) => {
  if (!contactById) {
    throw new WrongsParametersError({ message: "Not found" });
  }
};

module.exports = { ValidationError, WrongsParametersError, checkContactById };
