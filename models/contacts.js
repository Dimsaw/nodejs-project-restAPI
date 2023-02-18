const { Contact } = require("../db/contactModel.js");

const listContacts = async () => {
  const contacts = await Contact.find({});
  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

const removeContact = async (id) => {
  await Contact.findByIdAndRemove(id);
};

const addContact = async ({ name, email, phone, favorite }) => {
  const contact = await new Contact({ name, email, phone, favorite });
  await contact.save();
};

// const updateContact = async (contactId, { name, email, phone }) => {
//   const contacts = await listContacts();
//   const contact = contacts.find((contact) => contact.id === contactId);
//   contact.name = name;
//   contact.email = email;
//   contact.phone = phone;

//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return contact;
// };
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  // updateContact,
};
