const getContactsController = require("./getContactsController");
const getContactByIdController = require("./getContactByIdController");
const postContactController = require("./postContactController");
const deleteContactController = require("./deleteContactController");
const putContactController = require("./putContactController");
const patchContactController = require("./patchContactController");

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  patchContactController,
};
