const express = require("express");
const _ = express.Router();
const auth = require("./Auth.js");

_.use("/auth", auth);

module.exports = _;
