const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    
    projecttitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    createdby: {
      type: String,
      required: true,
      ref: "User",
    },
    // requiredskills: {
    //   type: String,
    // },
    published: {
      type: Boolean,
      required: true,
      default: false,
    },
   
  },
  { timestamps: true }
);

ProjectSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});


module.exports = mongoose.model("Project", ProjectSchema);
