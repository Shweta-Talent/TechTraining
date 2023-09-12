const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: { String },
    coordinates: [Number],
  },
});

UserSchema.index({
  location: "2dsphere",
});
UserSchema.pre("save", function (next) {
  if (
    this.isNew &&
    Array.isArray(this.location) &&
    0 === this.location.length
  ) {
    this.location = undefined;
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
