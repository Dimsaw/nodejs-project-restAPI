const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
} = require("../models/contacts");

const { checkContactById } = require("../helpers/errors");

const getContactsController = async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json({ contacts });
};

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  res.json({ contactById, message: "success" });
};

const postContactController = async (req, res, next) => {
  const contact = await addContact(req.body);
  res.status(201).json({ contact, message: "success" });
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
