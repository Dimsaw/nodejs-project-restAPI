const { Contact } = require("../db/contactModel.js");

const listContacts = async (_id) => {
  const contacts = await Contact.find({ owner: _id });
  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

const removeContact = async (id) => {
  await Contact.findByIdAndRemove(id);
};

const addContact = async ({ name, email, phone, favorite, owner }) => {
  const contact = await new Contact({ name, email, phone, favorite, owner });
  await contact.save();
  return contact;
};

const updateContact = async (id, { name, email, phone, favorite }) => {
  await Contact.findByIdAndUpdate(id, {
    $set: { name, email, phone, favorite },
  });
};

const patchContact = async (id, { favorite }) => {
  await Contact.findByIdAndUpdate(id, {
    $set: { favorite },
  });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
};
