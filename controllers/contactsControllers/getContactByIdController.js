const { getContactById } = require("../../models/contacts/index");

const { checkContactById } = require("../../helpers/checkById");

const getContactByIdController = async (req, res, next) => {
  const { id } = req.params;
  const contactById = await getContactById(id);
  console.log(contactById);
  await checkContactById(contactById);
  res.json({ contactById, message: "success" });
};

module.exports = getContactByIdController;
