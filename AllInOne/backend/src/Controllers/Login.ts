import express,{ Request,Response } from "express";
import { pool } from "../database";

export const Login =async(req:Request,res:Response)=>{

    try{
            const {emailId,password}=req.body
          
            
           const availableUser= await pool.query("SELECT * from USER_INFO where emailId=$1",[emailId])
           if(availableUser.rows.length==0)
           return res.send({statusCode:400 ,status:"failed" , message:"User doesnot exists"})
      
        
           
           if( availableUser.rows[0].emailId === emailId &&availableUser.rows[0].password === password)
           return res.send({status:"failed", message:"Password is incorrect"})
        else
           return res.send({statusCode:200 , status:"success", message:"Welcome to Casting Netowrk"})


    }
    catch(err){
        throw err
    }
}