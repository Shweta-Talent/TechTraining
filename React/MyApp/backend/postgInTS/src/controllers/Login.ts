import { Request,Response } from "express";
import jwt from "jsonwebtoken";
import { pool } from "../database";


export const Login =async(req:Request,res:Response,next:Function)=>{

    try{
        const {email,password}=req.body
        const secretKey = 'your-secret-key';

        const Email= await pool.query(`SELECT _password from TALENT where email=$1`,[email])
        const {_password} =Email.rows[0]
        if(Email.rows.length>0 && password===_password )
       {
        const token = jwt.sign(
            {
              
              email:req.body.email,
              password:req.body.password
            },
            secretKey || ""
          );
        res.send({
            status:"successfull",
            message:"jwt token generated",
            token
        })
       }
           

        
        else{
            console.log("invalid user")
        }
           

    }catch(err){
            res.send({
                status:"failed",
                message:err
            })
    }
    
}