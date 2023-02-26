const { Contact } = require("../db/contactModel");

const {
  // listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
} = require("../models/contacts");

const { checkContactById } = require("../helpers/errors");

// const getContactsController = async (req, res, next) => {
//   const owner = req.user._id;
//   const allContatcts = await Contact.find({ owner });
//   console.log(allContatcts);
//   res.json(allContatcts);
// };

const getContactsController = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 5, favorite = "" } = req.query;
  const skip = (page - 1) * limit;
  if (favorite === "") {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).populate("owner", "name email");
    res.json(result);
  } else {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    })
      .populate("owner", "name email")
      .find({ favorite: { $eq: favorite } });
    res.json(result);
  }
};

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  res.json({ contactById, message: "success" });
};

const postContactController = async (req, res) => {
  console.log("renvdfbvfdbvfdbvd", req.user);
  const { _id: owner } = req.user;
  const contact = await addContact({ ...req.body, owner });
  res.status(201).json({ message: "success", contact });
};
//   async (req, res, next) => {
//   const { _id: owner } = req.user;
//   const contact = await addContact(req.body, owner);
//   res.status(201).json({ contact, message: "success" });
// };

const deleteContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  await removeContact(id);
  res.status(200).json({ message: "success" });
};

const putContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  const result = await updateContact(id, req.body);

  res.status(200).json({ result, message: "success" });
};

const patchContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  const result = await patchContact(id, req.body);
  res.status(200).json({ result, message: "success" });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  patchContactController,
};
