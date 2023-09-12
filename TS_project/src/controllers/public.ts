import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

import { Isignup } from "../interfaces/signup";
import { UserModel } from "../models/user";
import { WELCOME } from "../utils/emailer";

export const signup = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    emailId,
    mobileNo,
    password,
    termsAndConditions,
    location,
    updateOffer,
    userType,
  }: Isignup = req.body;

  try {
    const validator: string | boolean =
      firstName &&
      lastName &&
      emailId &&
      mobileNo &&
      password &&
      termsAndConditions &&
      location &&
      updateOffer &&
      userType;
    if (
      (typeof validator === "string" && validator.length < 0) ||
      typeof validator === undefined
    ) {
      return res.status(500).send({
        status: "Failed",
        message: "Something is left to be filled",
      });
    }
    if (termsAndConditions == false) {
      return res.send({
        status: "failed",
        message: "Need to agree to terms and condition",
      });
    }

    const result = await UserModel.findOne({ emailId });
    if (result) throw Error("user exist");

    const user = new UserModel({
      userId: uuid(),
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      mobileNo: mobileNo,
      termsAndConditions: termsAndConditions,
      location: location,
      updateOffer: updateOffer,
      password: password,
      userType: userType,
    });
    const hashedPassword = bcrypt.hashSync(password, 10);
    user.passwordHash = hashedPassword;
    const data = await user.save();

    await WELCOME(emailId, firstName);
    return res.send({
      status: "success",
      message: "User Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const {
    body: { emailId, password },
  } = req;

  if (
    (typeof emailId && typeof password === "string" && emailId.length < 0) ||
    password.length < 0 ||
    typeof emailId ===
     undefined ||
    typeof password === undefined
  )
    throw Error("email and password are required");
  try {

    const user = await UserModel.findOne({ emailId });
 
    if (!user) throw Error("no user found");
    if (typeof user.passwordHash === "string") {
      const result = await bcrypt.compare(password, user.passwordHash);
    }

    if (user.status == "blocked")
      return res.send({
        status: 400,
        message: "you are blocked contact support team",
      });
    if (user.userType == "cd" && user.verifiedStatus == false)
      return res.send({ status: 400, message: "verify your account" });
    if (user.forcePasswordReset == false)
      return res.send({ status: 400, message: "reset your password" });
    
    const token = jwt.sign(
      {
        userType: user.userType,
        emailId,
        useId: user.userId,
      },
      process.env.SECRET_KEY || ""
    );
    res.json({ token });
    console.log(token);
    return res.json({ status: "success", message: "login successfull" });
  } catch (error) {
    console.log(error);
  }
};
