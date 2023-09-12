"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const public_1 = require("./routes/public");
const admin_1 = require("./routes/admin");
const isAuth_1 = require("./middleware/isAuth");
const cd_1 = require("./routes/cd");
const addData_1 = require("./routes/addData");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(addData_1.addDataRouter);
app.use(public_1.publicRouter);
app.use('/admin', admin_1.adminRoute);
app.use(isAuth_1.isAuth);
app.use('/cd', cd_1.cdRoutes);
if (typeof process.env.URI === "string") {
    mongoose_1.default.connect(process.env.URI)
        .then(() => {
        app.listen(process.env.PORT);
        console.log("connected");
    })
        .catch((e) => {
        console.log("error", e);
    });
}
else {
    console.log("It is not string");
}
