const { Contact } = require("../../db/contactModel");

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

module.exports = listContacts;
