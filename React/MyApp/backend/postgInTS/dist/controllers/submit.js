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
exports.count_submission = exports.submission_bytalent = exports.latestSubmission = exports.submission_for_project = exports.submitToproject = void 0;
const database_1 = require("../database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "/Users/shwetathakkar/cn/postgInTS/.env",
});
const submitToproject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId, talentId } = req.body;
        if (projectId == null || talentId == null) {
            throw new Error("Project ID or Talent ID is missing");
        }
        const result_talent = yield database_1.pool.query(`SELECT * FROM TALENT WHERE talent_id=$1`, [talentId]);
        const result_project = yield database_1.pool.query(`SELECT * FROM PROJECTS WHERE project_id=$1`, [projectId]);
        if (!result_talent.rows[0] || !result_project.rows[0])
            throw Error("Talent or Project dosenot exist");
        const submissionResult = yield database_1.pool.query(`SELECT * FROM SUBMISSION WHERE projectId = $1 AND talentId = $2`, [projectId, talentId]);
        if (submissionResult.rows.length > 0) {
            return res.json("Already submitted");
        }
        const currentDate = Date.now();
        const submission = yield database_1.pool.query("INSERT INTO SUBMISSION (talentId, projectId,submission_date) VALUES ($1, $2,$3)", [talentId, projectId, new Date(currentDate)]);
        res.send({
            status: "successfull",
            message: "submitted successfully ",
            submission
        });
    }
    catch (err) {
        res.send({
            status: "Failed",
            message: "Error found",
            Error: err
        });
    }
});
exports.submitToproject = submitToproject;
// Get all submissions for particular talent.
const submission_for_project = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.term;
        console.log(searchTerm);
        const result = yield database_1.pool.query('SELECT * FROM TALENT WHERE first_name ILIKE $1', [`%${searchTerm}%`]);
        console.log(result.rows);
        // SELECT *
        //   FROM SUBMISSION S
        //   WHERE T.first_name = $1
        //  //  LEFT JOIN  TALENT T ON S.talentId=T.talent_id 
        //  LEFT JOIN PROJECTS P ON S.projectId = P.project_id
        res.send({
            status: "successfull",
            message: "submitted successfully ",
            data: result.rows
        });
    }
    catch (err) {
        res.send({
            status: "Failed",
            message: "Error found",
            Error: err
        });
    }
});
exports.submission_for_project = submission_for_project;
//Get all Submissions on a project sorted by submission date (latest first).
const latestSubmission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.query.project;
        const result = yield database_1.pool.query(`   SELECT *
     FROM SUBMISSION S
     JOIN PROJECTS P ON S.projectId = P.project_id
     WHERE S.projectId = $1
     ORDER BY S.submission_date DESC;
     `, [projectId]);
        res.send({
            status: "successfull",
            message: "submitted successfully ",
            result
        });
    }
    catch (err) {
        res.send({
            status: "Failed",
            message: "Error found",
            Error: err
        });
    }
});
exports.latestSubmission = latestSubmission;
// Get all submissions for each talent sorted by talents
const submission_bytalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.pool.query(`SELECT t.first_name, t.last_name, s.projectId
    FROM TALENT t
    LEFT JOIN SUBMISSION s ON t.talent_id = s.talentId
    GROUP BY t.first_name, t.last_name,s.projectId
    ORDER BY t.first_name`);
        if (result.rows.length > 0)
            return res.status(200).json(result);
    }
    catch (err) {
        res.send({
            status: "Failed",
            message: "Error found",
            Error: err
        });
    }
});
exports.submission_bytalent = submission_bytalent;
//Get all the projects with the total number of submissions sorted by total submission.
const count_submission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.pool.query(`select COUNT(s.submission_id),project_name from SUBMISSION s 
  left join PROJECTS p on s.projectId = p.project_id group by project_name`);
        if (result.rows.length > 0) {
            res.send({
                status: "successfull",
                message: "submitted successfully ",
                result
            });
        }
    }
    catch (err) {
        res.send({
            status: "Failed",
            message: "Error found",
            Error: err
        });
    }
});
exports.count_submission = count_submission;
