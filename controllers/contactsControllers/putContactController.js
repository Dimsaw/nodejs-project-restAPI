const {
  getContactById,

  updateContact,
} = require("../../models/contacts/index");

const { checkContactById } = require("../../helpers/checkById");

const putContactController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  await checkContactById(contactById);
  const result = await updateContact(id, req.body);

  res.status(200).json({ result, message: "success" });
};

module.exports = putContactController;
