const express = require("express");
const logger = require("morgan");
const morgan = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contactsRouter");

const app = express();

// const { errorHandler } = require("./helpers/apiHelpers");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/contacts", contactsRouter);

// app.use(errorHandler);

module.exports = app;
