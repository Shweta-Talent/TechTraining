import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config"
import cors from "cors";
import talentRoute from "./routes/talent";
import projectRoute from "./routes/project";
import { create_tables } from "./database";
import publicRoute from "./routes/public";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(publicRoute)
app.use("/talent", talentRoute);
app.use("/project", projectRoute);


app.listen(process.env.PORT_D, function () {
  create_tables()
  console.log("connected to server");
});
