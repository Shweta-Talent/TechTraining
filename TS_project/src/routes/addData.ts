import { Router } from "express";
import { addEthnicity } from "../lookup/ethnicityLookup";
import { addGender } from "../lookup/genderLookup";
import { addLocation } from "../lookup/locationLookup";
import { addSkills } from "../lookup/requiredskillsLookup";

const addDataRouter:Router=Router()

addDataRouter.use('/addethnicity',addEthnicity)
addDataRouter.use('/addgender',addGender)
addDataRouter.use('/addskills',addSkills)
addDataRouter.use('/addlocation',addLocation)

export {addDataRouter}