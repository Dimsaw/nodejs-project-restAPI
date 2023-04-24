const express = require("express");

const router = express.Router();

const {
  loginValidation,
  validateSubscriptionUpdate,
  authMiddleware,
} = require("../../middlewares");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  signupController,
  loginController,
  logoutController,
  currentController,
  changeSubscriptionController,
} = require("../../controllers/usersController");

router.post("/signup", loginValidation, asyncWrapper(signupController));

router.post("/login", loginValidation, asyncWrapper(loginController));

router.get("/logout", authMiddleware, asyncWrapper(logoutController));

router.get("/current", authMiddleware, asyncWrapper(currentController));

router.patch(
  "/",
  authMiddleware,
  validateSubscriptionUpdate,
  asyncWrapper(changeSubscriptionController)
);

module.exports = router;
