const express = require("express");

const router = express.Router();

// const {
//   loginValidation,
//   validateSubscriptionUpdate,
// } = require("../../middlewares/usersMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const { avatarController } = require("../../controllers/usersController");

router.get("/avatar", authMiddleware, asyncWrapper(avatarController));

module.exports = router;
