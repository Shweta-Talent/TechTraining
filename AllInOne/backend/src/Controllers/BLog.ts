import { Request,Response } from "express"
import { pool } from "../database"
export const categoryList =async(req:Request,res:Response)=>{

    try{
       
       const result= await pool.query(`SELECT * FROM CATEGORIES`)
      
        
    }catch(err){
        console.log(err)
    }
}