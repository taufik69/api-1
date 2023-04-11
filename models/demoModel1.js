const mongoose = require("mongoose");
const { Schema } = mongoose;

const demodel = new Schema({
  title: String,
  logos: [{ src: String }],

  // updated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("title", demodel);
