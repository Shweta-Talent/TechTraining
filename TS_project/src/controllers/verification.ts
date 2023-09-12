import { Request,Response } from "express";
import { UserModel } from "../models/user";
import generator from 'generate-password-ts';
import { resetpassword,verifymail } from "../utils/emailer";

export const verify = async (req:Request, res:Response,) => {
  const {
    body: { emailId },
  } = req;
  if (emailId===null) throw Error("enter email");

  try {
    const user = await UserModel.findOne({ emailId });
    if (user===null) throw Error("user not found");

    await user.updateOne({ emailId }, { verifiedStatus: true });
    const admin_setPassword = generator.generate({
      length: 10,
      numbers: true,
    });

    await user.updateOne({ admin_setPassword: admin_setPassword });
    await user.updateOne({ verifiedStatus: true });
    await verifymail(emailId, user.firstName, admin_setPassword);
  } catch (error) {
    console.log(error);
  }
};
