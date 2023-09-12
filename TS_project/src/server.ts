import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import {publicRouter} from './routes/public'
import { adminRoute } from "./routes/admin"; 
import { isAuth } from "./middleware/isAuth";
import { cdRoutes } from "./routes/cd";
import { addDataRouter } from "./routes/addData";
dotenv.config();

const app=express()
app.use(bodyParser.json());

app.use(addDataRouter)
app.use(publicRouter)
app.use('/admin',adminRoute)
app.use(isAuth)
app.use('/cd',cdRoutes)

if(typeof process.env.URI==="string"){
mongoose.connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT);
    console.log("connected");
  })
  .catch((e) => {
    console.log("error", e);})}
else{
    console.log("It is not string")
}