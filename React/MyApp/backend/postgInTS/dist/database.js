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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_tables = exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.user_,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: parseInt(process.env.port || "5432"),
});
exports.pool = pool;
function create_tables() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        yield client.query('BEGIN');
        const talent = yield pool.query(`CREATE TABLE IF NOT EXISTS TALENT (
	
	talent_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	gender char,
	created_date DATE,
	is_active BOOLEAN NOT NULL
	
)`);
        yield pool.query(`CREATE TABLE IF NOT EXISTS PROJECTS(
	project_id UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
	project_name varchar(50),
	project_Description varchar(50),
	createdBy varchar(50),
	createdAt Date
)`);
        yield pool.query(`CREATE TABLE IF NOT EXISTS SUBMISSION (
	submission_id serial PRIMARY KEY,
 projectId UUID,
    talentId UUID,
	submission_date DATE,
	FOREIGN KEY (projectId) REFERENCES PROJECTS (project_id),
    FOREIGN KEY (talentId) REFERENCES TALENT (talent_id)
	
)`);
        console.log("database setup done");
    });
}
exports.create_tables = create_tables;
