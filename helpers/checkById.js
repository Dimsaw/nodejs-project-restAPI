const { WrongsParametersError } = require("./errors");

const checkContactById = (contactById) => {
  if (!contactById) {
    throw new WrongsParametersError("Not found");
  }
};

module.exports = checkContactById;
