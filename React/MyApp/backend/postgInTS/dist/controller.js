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
exports.deleteTalent = exports.update = exports.createTalent = exports.listALlTalent = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "/Users/shwetathakkar/cn/postgInTS/.env",
});
const pool = new pg_1.Pool({
    user: process.env.user_,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: parseInt(process.env.port || "5432"),
});
const listALlTalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = pool.query("select * from TALENT ", (err, results) => {
            if (!results)
                throw err;
            console.log(results);
            res.status(200).json(results.rows);
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.listALlTalent = listALlTalent;
const createTalent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { talent_id, first_name, last_name, email, gender, created_date, is_active, } = req.body;
        if (req.body == null)
            throw new Error('Body is empty');
        const result = `INSERT INTO TALENT (talent_id,first_name, last_name, email, gender, created_date, is_active)
       VALUES ($1, $2, $3, $4, $5, $6 , $7)
     `;
        yield pool.query(result, [
            talent_id,
            first_name,
            last_name,
            email,
            gender,
            created_date,
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
        let { talent_id, _first_name, _last_name, _email, _gender, _is_active, } = req.body;
        console.log(req.body);
        const alldata = yield pool.query(`select * from talent WHERE talent_id = $1 `, [talent_id]);
        console.log(alldata.rows[0].last_name);
        _first_name = _first_name == null ? alldata.rows[0].first_name : _first_name;
        _last_name = _last_name == null ? alldata.rows[0].last_name : _last_name;
        _email = _email == null ? alldata.rows[0].email : _email;
        _gender = _gender == null ? alldata.rows[0].gender : _gender;
        _is_active = _is_active == null ? alldata.rows[0].is_active : _is_active;
        const update = yield pool.query(`UPDATE TALENT SET 
      first_name = $2,
         last_name = $3,
         email = $4,
         gender = $5,
         is_active = $6
         WHERE talent_id = $1
      `, [talent_id, _first_name, _last_name, _email, _gender, _is_active]);
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
    const { talent_id } = req.body;
    const deletedata = yield pool.query(` DELETE FROM TALENT
      WHERE talent_id = $1`, [talent_id]);
    res.status(201).send("Data deleted successfully");
});
exports.deleteTalent = deleteTalent;
