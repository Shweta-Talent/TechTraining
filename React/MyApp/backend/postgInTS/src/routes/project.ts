import { Router } from "express";
import { SortCreateby, SortProject, deleteProject, listAllProject, projectadded, updateProject } from "../controllers/project";
import { submitToproject, submission_for_project, latestSubmission, submission_bytalent } from "../controllers/submit";

const projectRoute :Router=Router()

projectRoute.post('/Project',projectadded)
projectRoute.post('/ProjectList/search',listAllProject) 
projectRoute.delete('/deleteProject',deleteProject)
projectRoute.patch('/updateProject',updateProject)


projectRoute.post('/submit',submitToproject)
projectRoute.get('/talentSubmittedTo/search',submission_for_project)
projectRoute.get('/latestSubmission',latestSubmission)
projectRoute.get('/submissionByTalentName',submission_bytalent)
projectRoute.get('/sortByprojectName',SortProject)
projectRoute.get('/sortBycreateby',SortCreateby)

export default projectRoute

