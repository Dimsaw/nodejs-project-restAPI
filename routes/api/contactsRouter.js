const express = require("express");

const router = express.Router();

const {
  addValidation,
  patchValidation,
} = require("../../middlewares/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactController,
  patchContactController,
} = require("../../controllers/controllers.js");

router.get("/", asyncWrapper(getContactsController));

router.get("/:id", asyncWrapper(getContactByIdController));

router.post("/", addValidation, asyncWrapper(postContactController));

router.delete("/:id", asyncWrapper(deleteContactController));

router.put("/:id", addValidation, asyncWrapper(putContactController));

router.patch("/:id", patchValidation, asyncWrapper(patchContactController));

module.exports = router;
