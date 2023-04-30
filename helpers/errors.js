class checkError extends Error {
  constructor(message) {
    super(message);

    this.status = 400;
  }
}

class WrongVerification extends checkError {
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

module.exports = {
  WrongVerification,
  ValidationError,
  WrongsParametersError,
  NotAuthorizedError,
  ThisEmailRegistrated,
  checkError,
};
