const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },

  location: {
    type: { String },
    coordinates: [Number],
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
