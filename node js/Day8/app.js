const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const projectRoutes = require("./routes/projects");
const userRoute = require("./routes/user");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/project", projectRoutes);
app.use("/user", userRoute);
app.use(bodyParser.json());

mongoose
  .connect(process.env.mongoose_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });
