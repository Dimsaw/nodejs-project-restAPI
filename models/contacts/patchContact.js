const { Contact } = require("../../db/contactModel");

const patchContact = async (id, { favorite }) => {
  await Contact.findByIdAndUpdate(id, {
    $set: { favorite },
  });
};

module.exports = patchContact;
