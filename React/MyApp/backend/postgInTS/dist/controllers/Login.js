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
exports.Login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../database");
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const secretKey = 'your-secret-key';
        const Email = yield database_1.pool.query(`SELECT _password from TALENT where email=$1`, [email]);
        const { _password } = Email.rows[0];
        if (Email.rows.length > 0 && password === _password) {
            const token = jsonwebtoken_1.default.sign({
                email: req.body.email,
                password: req.body.password
            }, secretKey || "");
            res.send({
                status: "successfull",
                message: "jwt token generated",
                token
            });
        }
        else {
            console.log("invalid user");
        }
    }
    catch (err) {
        res.send({
            status: "failed",
            message: err
        });
    }
});
exports.Login = Login;
