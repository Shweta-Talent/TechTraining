"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import bodyParser from "body-parser";
const app = (0, express_1.default)();
const port = 3000;
mongoose_1.default.connect('mongodb+srv://shwetat:mHNCTQ2du3CpqkNI@titans.1kizif5.mongodb.net/CnTitans');
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'conncetion error'));
db.once('open', () => {
    console.log("connected to mongoose");
});
app.listen(port, () => {
    console.log("server is running");
});
