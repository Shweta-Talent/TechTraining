import { Router } from "express";
import { Login } from "../controllers/Login";

const publicRoute:Router=Router()

publicRoute.use('/login',Login)

export default publicRoute