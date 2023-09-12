import { Request,Response, Router } from "express";
import { createProject, listProject,deleteProject} from "../controllers/project";

const cdRoutes:Router=Router()

cdRoutes.use('/updateproject',)
cdRoutes.use('/createproject',createProject)
cdRoutes.use('/listproject',listProject)
cdRoutes.use('/deleteproject',deleteProject)
export {cdRoutes}