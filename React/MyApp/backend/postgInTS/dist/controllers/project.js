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
exports.SortCreateby = exports.SortProject = exports.updateProject = exports.deleteProject = exports.listAllProject = exports.projectadded = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("../database");
dotenv_1.default.config({
    path: "/Users/shwetathakkar/cn/postgInTS/.env",
});
const projectadded = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { project_name, project_Description, createdBy, genre } = req.body;
        if (req.body == null)
            throw Error("Body is empty");
        const result = yield database_1.pool.query(`INSERT INTO PROJECTS (project_name, project_Description,createdBy ,createdAt , genre ) VALUES ($1,$2,$3,$4 , $5) `, [project_name, project_Description, createdBy, new Date(), genre]);
        res.send({ message: "project added successfully" });
    }
    catch (err) {
        console.log(err);
    }
});
exports.projectadded = projectadded;
const listAllProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.term;
        const query = yield database_1.pool.query('SELECT * FROM PROJECTS WHERE project_name ILIKE $1', [`%${searchTerm}%`]);
        console.log(query);
        res.status(200).json(query);
    }
    catch (err) {
        console.log(err);
    }
});
exports.listAllProject = listAllProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.body;
    try {
        if (projectId == null) {
            throw new Error("Talent ID is missing");
        }
        const result = yield database_1.pool.query(`SELECT * FROM SUBMISSION WHERE projectId = $1`, [projectId]);
        if (result.rows.length < 0)
            throw new Error("project dont exists");
        const deleteQuery = database_1.pool.query(` DELETE FROM SUBMISSION WHERE talentId=$1`, [projectId]);
        const _delete = database_1.pool.query(` DELETE FROM TALENT WHERE talent_id=$1`, [
            projectId,
        ]);
        res.status(200).json({
            message: "Project and submissions deleted successfully",
        });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.deleteProject = deleteProject;
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { project_id, project_name, project_Description, createdBy, genre } = req.body;
        const data = yield database_1.pool.query(`SELECT * FROM PROJECTS WHERE project_id=$1`, [project_id]);
        project_name =
            project_id === null ? data.rows[0].project_name : project_name;
        project_Description =
            project_Description === null
                ? data.rows[0].project_Description
                : project_Description;
        createdBy = createdBy === null ? data.rows[0].createdBy : createdBy;
        genre = genre === null ? data.rows[0].genre : genre;
        yield database_1.pool.query(`UPDATE PROJECTS SET 
    project_name=$1,
    project_Description=$2,
    createdBy=$3 ,genre=$4 `, [project_name, project_Description, createdBy, genre]);
        res.send("project updated successfull");
    }
    catch (err) {
        res.send(err);
    }
});
exports.updateProject = updateProject;
const SortProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield database_1.pool.query('SELECT * FROM PROJECTS ORDER BY Lower(project_name) ');
        console.log(query);
        res.status(200).json(query);
    }
    catch (err) {
        console.log(err);
    }
});
exports.SortProject = SortProject;
const SortCreateby = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield database_1.pool.query('SELECT * FROM PROJECTS ORDER BY Lower(createdby)');
        console.log(query);
        res.status(200).json(query);
    }
    catch (err) {
        console.log(err);
    }
});
exports.SortCreateby = SortCreateby;
