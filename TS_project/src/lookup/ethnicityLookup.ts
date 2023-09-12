import { Request,Response } from "express"
import { v4 as uuid } from "uuid";
import { EthnicityModel } from "../models/ethnicity";

export const addEthnicity=async(req:Request,res:Response)=>{
    const Ethnicity=[
        {
            ethnicityId:uuid(),
            ethnicity:"Asian",
        },
        {
            ethnicityId:uuid(),
            ethnicity:"Middle Eastrn"
        },
        {
            ethnicityId:uuid(),
            ethnicity:"North Indian"
        },
        {
            ethnicityId:uuid(),
            ethnicity:"Soth Indian"
        }
    ]
    const result = await EthnicityModel.insertMany(Ethnicity);
}