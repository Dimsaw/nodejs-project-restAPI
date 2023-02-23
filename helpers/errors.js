class checkError extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class ValidationError extends checkError {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class WrongsParametersError extends checkError {
  constructor(message) {
    super(message);

    this.status = 404;
  }
}

class NotAuthorizedError extends checkError {
  constructor(message) {
    super(message);

    this.status = 401;
  }
}

class ThisEmailRegistrated extends checkError {
  constructor(message) {
    super(message);

    this.status = 409;
  }
}

const checkContactById = (contactById) => {
  if (!contactById) {
    throw new WrongsParametersError("Not found");
  }
};

module.exports = {
  ValidationError,
  WrongsParametersError,
  NotAuthorizedError,
  checkError,
  ThisEmailRegistrated,
  checkContactById,
};
