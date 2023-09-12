import { Request,Response } from "express";
import { UserModel } from "../models/user";

export const resetpassword = async (req:Request, res:Response) => {
  const {
    body: { old_password, new_password, emailId },
  } = req;
  const validator=old_password && new_password && emailId
  if (
    (typeof validator === "string" && validator.length < 0) ||
    typeof validator === undefined
  ) {
    return res.status(500).send({
      status: "Failed",
      message: "Something is left to be filled",
    });
  }
  const user = await UserModel.findOne({ emailId });
  if(user !==null){
  if (old_password !== user.admin_setPassword){
    return res.send({ status: "failed", message: "Enter the password sent in verification email" });
  }
    if(new_password===user.admin_setPassword)
    return res.send({ status: "failed", message: "similar password" });
  await user.updateOne({ password: new_password });
  await user.updateOne({ forcePasswordReset: true });
  console.log("successfull");
}};
