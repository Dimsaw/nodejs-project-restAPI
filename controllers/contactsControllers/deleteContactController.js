const {
  getContactById,
  removeContact,
} = require("../../models/contacts/index");

const { checkContactById } = require("../../helpers/checkById");

const deleteContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  await removeContact(id);
  res.status(200).json({ message: "success" });
};

module.exports = deleteContactController;
