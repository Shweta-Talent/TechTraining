import { Request,Response } from "express"
import { v4 as uuid } from "uuid";
import { GenderModel } from "../models/gender";

export const addGender=async(req:Request,res:Response)=>{
    const Gender=[
        {
            genderId:uuid(),
            gender:"Male",
        },
        {
            genderId:uuid(),
            gender:"Female"
        },
        {
            genderId:uuid(),
            gender:"Non-Binary Person"
        },
        {
            genderId:uuid(),
            gender:"Trans Gender"
        }
    ]
    const result = await GenderModel.insertMany(Gender);
}