const express = require("express");

const router = express.Router();

const {
  loginValidation,
  validateSubscriptionUpdate,
  authMiddleware,
} = require("../../middlewares");

const { upload } = require("../../middlewares/upload");

const { asyncWrapper } = require("../../helpers/index");

const {
  signupController,
  loginController,
  logoutController,
  currentController,
  changeSubscriptionController,
} = require("../../controllers/usersControllers/index");

const { updateAvatar } = require("../../controllers/avatarController/index");

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

router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  asyncWrapper(updateAvatar)
);

module.exports = router;
