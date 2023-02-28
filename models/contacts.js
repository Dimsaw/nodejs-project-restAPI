const { Contact } = require("../db/contactModel");

const listContacts = async (owner, favorite, skip, limit) => {
  if (favorite === "") {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).populate("owner", "name email");
    return result;
  }

  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  })
    .populate("owner", "name email")
    .find({ favorite: { $eq: favorite } });
  return result;
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

const patchContact = async (id, { favorite, subscription }) => {
  await Contact.findByIdAndUpdate(id, {
    $set: { favorite, subscription },
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
