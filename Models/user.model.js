const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  text: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
