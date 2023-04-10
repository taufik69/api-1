const express = require("express");
const _ = express.Router();
const demodel = require("../../models/demoModel1");

_.post("/title", async (req, res) => {
  try {
    const { title, logos } = req.body;
    const sendData = await new demodel({
      title,
      logos,
    }).save();
    res.status(200).json({
      message: `${sendData}`,
    });
  } catch (error) {
    res.status(404).json({
      error: `Error from Auth routes ${error}`,
    });
  }
});

_.get("/gettitle", async (req, res) => {
  try {
    const gettitle = await demodel.findOne({});
    res.status(200).json(gettitle);
  } catch (error) {
    res.status(404).json({
      error: `Error from tile routes ${error}`,
    });
  }
});

module.exports = _;
