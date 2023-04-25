const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
} = require("../models/contacts/index");

const { checkContactById } = require("../helpers/checkById");

const getContactsController = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = "" } = req.query;
  const skip = (page - 1) * limit;

  const result = await listContacts(owner, favorite, skip, limit);

  res.json(result);
};

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  res.json({ contactById, message: "success" });
};

const postContactController = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await addContact({ ...req.body, owner });
  res.status(201).json({ message: "success", contact });
};

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
