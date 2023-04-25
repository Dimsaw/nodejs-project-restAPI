const { listContacts } = require("../../models/contacts/index");

const getContactsController = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = "" } = req.query;
  const skip = (page - 1) * limit;

  const result = await listContacts(owner, favorite, skip, limit);

  res.json(result);
};
module.exports = getContactsController;
