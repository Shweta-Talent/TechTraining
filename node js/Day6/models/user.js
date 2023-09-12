const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
  displayname: {
    type: String,
    required: true,
  },
});

User.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});

module.exports = mongoose.model("User", User);
