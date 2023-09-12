import { Request,Response } from "express"
import { v4 as uuid } from "uuid";
import { SkillModel } from "../models/skills";

export const addSkills=async(req:Request,res:Response)=>{
    const SkillsList=[
        {
            skillId:uuid(),
            skillName:"Dance"
        },
        {
            skillId:uuid(),
            skillName:"Swim"
        },
        {
            skillId:uuid(),
            skillName:"Play"
        },
        {
           skillId:uuid(),
           skillName:"Workout"
        }
    ]
    const result = await SkillModel.insertMany(SkillsList);
}