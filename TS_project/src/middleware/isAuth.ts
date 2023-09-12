import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models/user";



export const isAuth = async (req:Request, res:Response, next:NextFunction) => {

  const authorization:string |undefined = req.get("Authorization");
if(authorization===undefined) return("please provide authorization token")
  const token:string = authorization.split(" ")[1];
  const decode_token:string | JwtPayload = jwt.verify(token, process.env.SECRET_KEY || "") as JwtPayload;
  if (!decode_token) throw Error("something went wrong");

  try {
    const useId:string = decode_token.useId
    const emailId:string=decode_token.emailId
    const userType:string=decode_token.userType
    const user = await UserModel.findOne({ emailId });
    if(user !== null)
    if (userType == "cd") {
      if (user.forcePasswordReset == false)
        return res.send({ status: "failed", message: "reset password" });
    }
  
  } catch (error) {
    console.log(error);
  }
 
  next();
};
