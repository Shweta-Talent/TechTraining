import express, { Request, Response } from "express";
import mongoose from 'mongoose';
// import bodyParser from "body-parser";


const app=express()
const port=3000

mongoose.connect('mongodb+srv://shwetat:mHNCTQ2du3CpqkNI@titans.1kizif5.mongodb.net/CnTitans')

const db=mongoose.connection;

db.on('error',console.error.bind(console,'conncetion error'))
db.once('open',()=>{
    console.log("connected to mongoose")
})

app.listen(port,()=>{
    console.log("server is running")
})