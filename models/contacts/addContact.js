const { Contact } = require("../../db/contactModel");

const addContact = async ({ name, email, phone, favorite, owner }) => {
  const contact = await new Contact({ name, email, phone, favorite, owner });
  await contact.save();
  return contact;
};

module.exports = addContact;
