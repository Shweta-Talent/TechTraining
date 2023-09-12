"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateProject = exports.deleteProject = exports.updateProject = exports.listProject = exports.createProject = void 0;
const project_1 = require("../models/project");
const location_1 = require("../models/location");
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const locationEntity_1 = require("../models/locationEntity");
const dateEntity_1 = require("../models/dateEntity");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body !== null) {
            const { projectName, internalProjectName, projectType, union, cdNameContactInfo, projectDescription, castingAssociateContactInfo, castingAssistantContactInfo, castingPhoneNumberContactInfo, castingEmailContactInfo, workDateFrom, workDateTo, workDate, workLocation, auditionLocation, auditionDateFrom, auditionDateTo, auditionDate, projectLocation, isPublished, } = req.body;
            const validator = projectName &&
                internalProjectName &&
                projectType &&
                union &&
                projectDescription;
            if ((typeof validator === "string" && validator.length < 0) ||
                typeof validator === undefined) {
                return res.status(500).send({
                    status: "Failed",
                    message: "Something is left to be filled",
                });
            }
            const projectId = (0, uuid_1.v4)();
            const authorization = req.get("Authorization");
            if (authorization === undefined)
                return ("please provide authorization token");
            const token = authorization.split(" ")[1];
            const decode_token = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "");
            const createdBy = decode_token.useId;
            const project = new project_1.ProjectModel({
                createdBy: createdBy,
                projectId: projectId,
                projectName: projectName,
                internalProjectName: internalProjectName,
                projectType: projectType,
                union: union,
                projectDescription: projectDescription,
                cdNameContactInfo: cdNameContactInfo,
                workDateFrom: workDateFrom,
                workDate: workDate,
                workToDate: workDateTo,
                auditionDate: auditionDate,
                auditionFromDate: auditionDateFrom,
                auditionToDate: auditionDateTo,
                projectLocation: projectLocation,
                isPublished: isPublished,
            });
            function generateDates(auditionDateFrom, auditionDateTo) {
                const dateList = [];
                let start_date = new Date(auditionDateFrom);
                let end_date = new Date(auditionDateTo);
                while (start_date <= end_date) {
                    dateList.push(new Date(start_date));
                    start_date.setDate(start_date.getDate() + 1);
                }
                return dateList;
            }
            try {
                const location_array = auditionLocation.split(",");
                for (let i = 0; i < location_array.length; i++) {
                    const data = yield location_1.LocationModel.findOne({
                        locationName: location_array[i],
                    });
                    let id = "";
                    if (data !== null)
                        id = data.locationId;
                    const addData = new locationEntity_1.LocationEntityModel({
                        locationId: id,
                        entityId: projectId,
                        entityType: "audition",
                    });
                    yield addData.save();
                }
            }
            catch (error) {
                console.log(error);
            }
            try {
                const location_array = workLocation.split(",");
                for (let i = 0; i < location_array.length; i++) {
                    const data = yield location_1.LocationModel.findOne({
                        locationName: location_array[i],
                    });
                    let id = "";
                    if (data !== null)
                        id = data.locationId;
                    const addData = new locationEntity_1.LocationEntityModel({
                        locationId: id,
                        entityId: projectId,
                        entityType: "work",
                    });
                    yield addData.save();
                }
            }
            catch (error) {
                console.log(error);
            }
            try {
                const location_array = projectLocation.split(",");
                for (let i = 0; i < location_array.length; i++) {
                    const data = yield location_1.LocationModel.findOne({
                        locationName: location_array[i],
                    });
                    let id = "";
                    if (data !== null)
                        id = data.locationId;
                    const addData = new locationEntity_1.LocationEntityModel({
                        locationId: id,
                        entityId: projectId,
                        entityType: "project",
                    });
                    yield addData.save();
                }
            }
            catch (error) {
                console.log(error);
            }
            try {
                let Dates = [];
                if (auditionDate !== undefined) {
                    Dates.push(auditionDate);
                }
                else if (auditionDateFrom && auditionDateTo) {
                    Dates = generateDates(auditionDateFrom, auditionDateTo);
                }
                for (let i = 0; i < Dates.length; i++) {
                    const result = new dateEntity_1.DateEntityModel({
                        entityId: projectId,
                        date: Dates[i],
                        entityType: "audition",
                    });
                    yield result.save();
                }
            }
            catch (error) {
                console.log(error);
            }
            try {
                let Dates = [];
                if (workDate != undefined) {
                    Dates.push(workDate);
                }
                else if (workDateFrom && workDateTo) {
                    Dates = generateDates(workDateFrom, workDateTo);
                }
                for (let i = 0; i < Dates.length; i++) {
                    const result = new dateEntity_1.DateEntityModel({
                        entityId: projectId,
                        date: Dates[i],
                        entityType: "work",
                    });
                    yield result.save();
                }
            }
            catch (error) {
                console.log(error);
            }
            const data = yield project.save();
            res.send({ status: "success", message: "project created" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProject = createProject;
const listProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useId = req.body.useId;
    try {
        const data = yield project_1.ProjectModel.aggregate([
            {
                $match: {
                    createdBy: useId,
                }
            },
            {
                $lookup: {
                    from: 'DateEntity',
                    localField: 'projectId',
                    foreignField: 'entityId',
                    as: 'Dates',
                    pipeline: [
                        {
                            $project: {
                                _id: 0,
                                entityType: 1,
                                date: 1,
                            },
                        },
                    ],
                },
            },
            {
                $lookup: {
                    from: 'LocationEntity',
                    localField: 'projectId',
                    foreignField: 'entityId',
                    as: 'Dates',
                    pipeline: [
                        {
                            $project: {
                                _id: 0,
                                entityType: 1,
                                date: 1,
                            },
                        },
                    ],
                },
            },
        ]);
        console.log(data);
        res.send({
            status: "success",
            message: "Projects successfully found",
        });
    }
    catch (error) {
        res.send({ status: "failed", message: "something went wrong" });
    }
});
exports.listProject = listProject;
const updateProject = (req, res) => {
};
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.body.projectId;
    try {
        const project = yield project_1.ProjectModel.findOneAndDelete(projectId);
        if (project === null)
            throw Error("project not forund");
        const Date = yield dateEntity_1.DateEntityModel.deleteMany({ entityId: projectId });
        const deleteLocations = yield locationEntity_1.LocationEntityModel.deleteMany({ entityId: projectId });
        res.send({ status: "success", message: "deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProject = deleteProject;
const duplicateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("wwwws");
    const projectID = req.body.projectId;
    try {
        const toFindProjectId = yield project_1.ProjectModel.findOne({ projectId: projectID });
        if (!toFindProjectId)
            throw Error("project not found");
        const duplicateProject = new project_1.ProjectModel(Object.assign(Object.assign({}, toFindProjectId), { _id: (0, uuid_1.v4)(), projectId: (0, uuid_1.v4)() }));
        console.log(duplicateProject);
    }
    catch (error) {
        console.log(error);
    }
});
exports.duplicateProject = duplicateProject;
