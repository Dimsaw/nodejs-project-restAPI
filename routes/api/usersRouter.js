const express = require("express");

const router = express.Router();

const { addValidation } = require("../../middlewares/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
} = require("../../controllers/controllers.js");

router.post("/signup", addValidation, asyncWrapper(getContactsController));

router.post("/login", asyncWrapper(getContactByIdController));

router.post("/logout", addValidation, asyncWrapper(postContactController));

router.get("/current", asyncWrapper(deleteContactController));

module.exports = router;
