import {Router}from 'express';
import {signup,login} from '../controllers/public'



const publicRouter:Router=Router();

publicRouter.post("/signup",signup)
publicRouter.post("/login",login)

export {publicRouter}
