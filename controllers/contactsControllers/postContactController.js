const { addContact } = require("../../models/contacts/index");

const postContactController = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await addContact({ ...req.body, owner });
  res.status(201).json({ message: "success", contact });
};

module.exports = postContactController;
