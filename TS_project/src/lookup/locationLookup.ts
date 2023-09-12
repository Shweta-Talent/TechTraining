import { Request,Response } from "express"
import { v4 as uuid } from "uuid";
import { LocationModel } from "../models/location";

export const addLocation=async(req:Request,res:Response)=>{
    const Locations=[
        {
            locationId:uuid(),
            locationName:"Surat"
        },
        {
            locationId:uuid(),
            locationName:"Chennai"
        },
        {
            locationId:uuid(),
            locationName:"Mumbai"
        }, 
        {
            locationId:uuid(),
            locationName:"Bangalore"
        },
    ];
    const result = await LocationModel.insertMany(Locations);
}