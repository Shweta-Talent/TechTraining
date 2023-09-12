const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const UserRoutes = require("./Routes/user");
const ProjectRoutes = require("./Routes/project");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/project", ProjectRoutes);
app.use("/user", UserRoutes);

mongoose
  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
