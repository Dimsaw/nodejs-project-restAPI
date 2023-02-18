const express = require("express");

const router = express.Router();

const { addValidation } = require("../../middlewares/validationMiddleware");
const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  patchContactController,
} = require("../../controllers/controllers.js");

router.get("/", getContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", addValidation, postContactController);

router.delete("/:contactId", deleteContactController);

router.put("/:contactId", addValidation, putContactController);

router.patch("/:contactId", addValidation, patchContactController);

module.exports = router;
