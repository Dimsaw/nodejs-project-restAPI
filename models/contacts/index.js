const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const patchContact = require("./patchContact");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
};
