const express = require("express");

const router = express.Router();

const { loginValidation } = require("../../middlewares/usersMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  signupController,
  loginController,
  logoutController,
  currentController,
} = require("../../controllers/usersController");

router.post("/signup", loginValidation, asyncWrapper(signupController));

router.post("/login", loginValidation, asyncWrapper(loginController));

router.post("/logout", asyncWrapper(logoutController));

router.get("/current", authMiddleware, asyncWrapper(currentController));

module.exports = router;
