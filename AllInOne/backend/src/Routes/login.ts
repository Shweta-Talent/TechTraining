import { Router } from "express";
import { Login } from "../Controllers/Login";

const LoginRoute:Router =Router()

LoginRoute.post('/Login',Login)


export default LoginRoute