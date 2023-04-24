const { Contact } = require("../../db/contactModel");

const updateContact = async (id, { name, email, phone, favorite }) => {
  await Contact.findByIdAndUpdate(id, {
    $set: { name, email, phone, favorite },
  });
};

module.exports = updateContact;
