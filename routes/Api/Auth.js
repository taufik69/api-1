const express = require("express");
const _ = express.Router();

_.post("/user", async (req, res) => {
  try {
    res.status(200).json({
      message: `This is Auth routes`,
    });
  } catch (error) {
    res.status(404).json({
      error: `Error from Auth routes ${error}`,
    });
  }
});

module.exports = _;
