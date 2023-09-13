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
exports.filterALlTalentByGender = exports.filterALlTalentByActive = exports.deleteTalent = exports.update = exports.createTalent = exports.listALlTalent = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("../database");
dotenv_1.default.config({
    path: "/Users/shwetathakkar/cn/postgInTS/.env",
});
//add pagination
const listALlTalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { offset, limit } = req.body;
        // const offset = parseInt(req.body.offset as string) || 0;
        // const limit = parseInt(req.body.limit as string) || 1;
        console.log(offset, limit);
        const results = yield database_1.pool.query(`select * from TALENT offset ${offset} limit ${limit} `);
        res.send({
            status: "Success",
            message: "listed successfully",
            results
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.listALlTalent = listALlTalent;
const createTalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, email, gender, is_active, } = req.body;
        if (req.body == null)
            throw new Error("Body is empty");
        const result = `INSERT INTO TALENT (first_name, last_name, email, gender, created_date, is_active)
       VALUES ( $1, $2, $3, $4, $5 , $6)
     `;
        yield database_1.pool.query(result, [
            first_name,
            last_name,
            email,
            gender,
            new Date(),
            is_active,
        ]);
        res.status(201).send("Data inserted successfully");
    }
    catch (err) {
        console.log(err);
    }
});
exports.createTalent = createTalent;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { talent_id, first_name, last_name, email, gender, is_active, } = req.body;
        console.log(req.body);
        const alldata = yield database_1.pool.query(`select * from talent WHERE talent_id = $1 `, [talent_id]);
        console.log(alldata.rows[0].last_name);
        first_name == null ? alldata.rows[0].first_name : first_name;
        last_name = last_name == null ? alldata.rows[0].last_name : last_name;
        email = email == null ? alldata.rows[0].email : email;
        gender = gender == null ? alldata.rows[0].gender : gender;
        is_active = is_active == null ? alldata.rows[0].is_active : is_active;
        const update = yield database_1.pool.query(`UPDATE TALENT SET 
      first_name = $2,
         last_name = $3,
         email = $4,
         gender = $5,
         is_active = $6
         WHERE talent_id = $1
      `, [talent_id, first_name, last_name, email, gender, is_active]);
        console.log(update);
        if (!update)
            res.send(Error);
        else
            res.status(201).send("Data updated successfully");
    }
    catch (err) {
        console.log(err);
    }
});
exports.update = update;
const deleteTalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { talent_id } = req.body;
    // const deletedata = await pool.query(
    //   ` DELETE FROM TALENT
    //   WHERE talent_id = $1`,
    //   [talent_id]
    // );
    // res.status(201).send("Data deleted successfully");
    try {
        const { talentId } = req.body;
        if (talentId == null) {
            throw new Error("Talent ID is missing");
        }
        const result = yield database_1.pool.query(`SELECT * FROM SUBMISSION WHERE talentId = $1`, [talentId]);
        if (result.rows.length < 0)
            throw new Error("talent dont exists"); //
        const deleteQuery = yield database_1.pool.query(` DELETE FROM SUBMISSION WHERE talentId=$1`, [talentId]);
        const _delete = yield database_1.pool.query(` DELETE FROM TALENT WHERE talent_id=$1`, [
            talentId,
        ]);
        res.status(200).json({
            message: "Talent and submissions deleted successfully",
        });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.deleteTalent = deleteTalent;
const filterALlTalentByActive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield database_1.pool.query(`select * from TALENT  where is_active=true`);
        res.send({
            status: "Success",
            message: "listed successfully",
            results
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.filterALlTalentByActive = filterALlTalentByActive;
const filterALlTalentByGender = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield database_1.pool.query(`select * from TALENT  where gender='F'`);
        res.send({
            status: "Success",
            message: "listed successfully",
            results
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.filterALlTalentByGender = filterALlTalentByGender;
