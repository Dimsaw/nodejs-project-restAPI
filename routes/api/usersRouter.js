const express = require("express");

const router = express.Router();

const { addValidation } = require("../../middlewares/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  signupController,
  loginController,
  logoutController,
  currentController,
} = require("../../controllers/usersController");

router.post("/signup", addValidation, asyncWrapper(signupController));

router.post("/login", asyncWrapper(loginController));

router.post("/logout", addValidation, asyncWrapper(logoutController));

router.get("/current", asyncWrapper(currentController));

module.exports = router;
