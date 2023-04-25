const { Contact } = require("../../db/contactModel");

const removeContact = async (id) => {
  await Contact.findByIdAndRemove(id);
};

module.exports = removeContact;
