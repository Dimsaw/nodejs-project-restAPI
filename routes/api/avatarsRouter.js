const express = require("express");
const path = require("path");

const router = new express.Router();

const FILE_DIR = path.resolve("./public/avatar");

router.use("/", express.static(FILE_DIR));
module.exports = router;
