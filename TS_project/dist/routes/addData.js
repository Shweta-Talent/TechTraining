"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDataRouter = void 0;
const express_1 = require("express");
const ethnicityLookup_1 = require("../lookup/ethnicityLookup");
const genderLookup_1 = require("../lookup/genderLookup");
const locationLookup_1 = require("../lookup/locationLookup");
const requiredskillsLookup_1 = require("../lookup/requiredskillsLookup");
const addDataRouter = (0, express_1.Router)();
exports.addDataRouter = addDataRouter;
addDataRouter.use('/addethnicity', ethnicityLookup_1.addEthnicity);
addDataRouter.use('/addgender', genderLookup_1.addGender);
addDataRouter.use('/addskills', requiredskillsLookup_1.addSkills);
addDataRouter.use('/addlocation', locationLookup_1.addLocation);