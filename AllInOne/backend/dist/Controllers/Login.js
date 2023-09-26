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
exports.Login = void 0;
const database_1 = require("../database");
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailId, password } = req.body;
        const availableUser = yield database_1.pool.query("SELECT * from USER_INFO where emailId=$1", [emailId]);
        if (availableUser.rows.length == 0)
            return res.send({ statusCode: 400, status: "failed", message: "User doesnot exists" });
        if (availableUser.rows[0].emailId === emailId && availableUser.rows[0].password === password)
            return res.send({ status: "failed", message: "Password is incorrect" });
        else
            return res.send({ statusCode: 200, status: "success", message: "Welcome to Casting Netowrk" });
    }
    catch (err) {
        throw err;
    }
});
exports.Login = Login;
