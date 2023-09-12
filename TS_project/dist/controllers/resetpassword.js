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
exports.resetpassword = void 0;
const user_1 = require("../models/user");
const resetpassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { old_password, new_password, emailId }, } = req;
    const validator = old_password && new_password && emailId;
    if ((typeof validator === "string" && validator.length < 0) ||
        typeof validator === undefined) {
        return res.status(500).send({
            status: "Failed",
            message: "Something is left to be filled",
        });
    }
    const user = yield user_1.UserModel.findOne({ emailId });
    if (user !== null) {
        if (old_password !== user.admin_setPassword) {
            return res.send({ status: "failed", message: "Enter the password sent in verification email" });
        }
        if (new_password === user.admin_setPassword)
            return res.send({ status: "failed", message: "similar password" });
        yield user.updateOne({ password: new_password });
        yield user.updateOne({ forcePasswordReset: true });
        console.log("successfull");
    }
});
exports.resetpassword = resetpassword;
