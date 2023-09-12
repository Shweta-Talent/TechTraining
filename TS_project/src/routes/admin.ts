import { Router } from "express";
import { verify } from "../controllers/verification";
import { resetpassword } from "../controllers/resetpassword";
const adminRoute:Router=Router()


adminRoute.post("/verifyCD", verify);
adminRoute.post('/ResetPassword',resetpassword)



export {adminRoute}