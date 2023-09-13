"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const talent_1 = __importDefault(require("./routes/talent"));
const project_1 = __importDefault(require("./routes/project"));
const database_1 = require("./database");
const public_1 = __importDefault(require("./routes/public"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(public_1.default);
app.use("/talent", talent_1.default);
app.use("/project", project_1.default);
app.listen(process.env.PORT_D, function () {
    (0, database_1.create_tables)();
    console.log("connected to server");
});
