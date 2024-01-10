const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  logo: String,
});

module.exports = mongoose.model("Logos", logoSchema);
