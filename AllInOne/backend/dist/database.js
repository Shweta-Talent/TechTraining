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
require("dotenv/config");
exports.pool = new pg_1.Pool({
    user: process.env.user_,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: parseInt(process.env.port || "5432"),
});
function create_tables() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        yield exports.pool.query(`CREATE TABLE IF NOT EXISTS USER_INFO (
        userId UUID DEFAULT UUID_GENERATE_V4() PRIMARY KEY,
        first_name varchar(50) not null,
        last_name varchar(50) not null,
        emailId varchar(50),
        password varchar(50)
    )`);
        yield exports.pool.query(`INSERT INTO USER_INFO (first_name, last_name, emailId, password) VALUES (
       'Jatin',
      'Vatsa',
      ' Jatin@1234',
      '1234'  
    )`);
    });
}
exports.create_tables = create_tables;
