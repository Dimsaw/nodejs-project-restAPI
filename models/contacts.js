const { Contact } = require("../db/contactModel.js");

const listContacts = async () => {
  const contacts = await Contact.find({});
  console.log(contacts);
  return contacts;
};

const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  return contact;
};

const removeContact = async (id) => {
  await Contact.findByIdAndRemove(id);
};

// const addContact = async ({ name, email, phone }) => {
//   const newContact = {
//     id: shortid.generate(),
//     name,
//     email,
//     phone,
//   };

//   const contacts = await listContacts();
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return newContact;
// };

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
  // addContact,
  // updateContact,
};
