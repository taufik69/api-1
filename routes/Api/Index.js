const express = require("express");
const _ = express.Router();
const user = require("./Auth.js");

_.use("/user", user);

module.exports = _;
