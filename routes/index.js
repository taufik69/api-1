const express = require("express");
const _ = express.Router();
const Apiroutes = require("./Api/Index");

const baseUrl = process.env.BASE_URL;

_.use(baseUrl, Apiroutes);
_.use(baseUrl, (req, res) => {
  res.json({
    message: "You are hit on worng path / Routes",
  });
});

module.exports = _;
