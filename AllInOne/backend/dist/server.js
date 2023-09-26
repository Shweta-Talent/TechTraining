"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = require("./database");
require("dotenv/config");
const login_1 = __importDefault(require("./Routes/login"));
const cors_1 = __importDefault(require("cors"));
const Category_1 = __importDefault(require("./Routes/Category"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(login_1.default);
app.use(Category_1.default);
app.listen(process.env.PORT, () => ((0, database_1.create_tables)(),
    console.log("connected to server")));
