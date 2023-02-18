const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

const getContactsController = async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

const getContactByIdController = async (req, res) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  if (!contactById) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json({ contactById, message: "success" });
};

const postContactController = async (req, res, next) => {
  try {
    const contact = await addContact(req.body);
    res.status(201).json({ contact, message: "success" });
  } catch (error) {
    next(error);
  }
};

const deleteContactController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await removeContact(id);
    console.log(contact);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

const putContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    const result = await updateContact(contactId, req.body);

    res.status(200).json({ result, message: "success" });
  } catch (error) {
    next(error);
  }
};

const patchContactController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    const result = await updateContact(contactId, req.body);

    res.status(200).json({ result, message: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  patchContactController,
};
