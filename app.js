const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contactsRouter");
const usersRouter = require("./routes/api/usersRouter");
const avatarRouter = require("./routes/api/avatarsRouter");

const app = express();

const { errorHandler } = require("./helpers/index");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/avatars", avatarRouter);

app.use("/api/users", usersRouter);

app.use("/api/contacts", contactsRouter);

app.use(errorHandler);

module.exports = app;
