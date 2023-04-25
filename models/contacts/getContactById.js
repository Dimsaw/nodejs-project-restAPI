const { Contact } = require("../../db/contactModel");

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

module.exports = getContactById;
