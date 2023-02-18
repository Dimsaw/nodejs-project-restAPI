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

router.get("/:id", getContactByIdController);

router.post("/", addValidation, postContactController);

router.delete("/:id", deleteContactController);

router.put("/:id", addValidation, putContactController);

router.patch("/:id", addValidation, patchContactController);

module.exports = router;
