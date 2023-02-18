const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  patchContact,
} = require("../models/contacts");

const { WrongsParametersError } = require("../helpers/errors");

const getContactsController = async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json({ contacts });
};

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  if (!contactById) {
    throw new WrongsParametersError({ message: "Not found" });
  }
  res.json({ contactById, message: "success" });
};

const postContactController = async (req, res, next) => {
  const contact = await addContact(req.body);
  res.status(201).json({ contact, message: "success" });
};

const deleteContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  if (!contactById) {
    return res.status(404).json({ message: "Not found" });
  }
  await removeContact(id);
  res.status(200).json({ message: "success" });
};

const putContactController = async (req, res, next) => {
  const { id } = req.params;
  const contact = await getContactById(id);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }
  const result = await updateContact(id, req.body);

  res.status(200).json({ result, message: "success" });
};

const patchContactController = async (req, res, next) => {
  const { id } = req.params;
  const contact = await getContactById(id);
  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }
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
