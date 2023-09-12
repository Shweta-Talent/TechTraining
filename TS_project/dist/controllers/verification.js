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
exports.verify = void 0;
const user_1 = require("../models/user");
const generate_password_ts_1 = __importDefault(require("generate-password-ts"));
const emailer_1 = require("../utils/emailer");
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { emailId }, } = req;
    if (emailId === null)
        throw Error("enter email");
    try {
        const user = yield user_1.UserModel.findOne({ emailId });
        if (user === null)
            throw Error("user not found");
        yield user.updateOne({ emailId }, { verifiedStatus: true });
        const admin_setPassword = generate_password_ts_1.default.generate({
            length: 10,
            numbers: true,
        });
        yield user.updateOne({ admin_setPassword: admin_setPassword });
        yield user.updateOne({ verifiedStatus: true });
        yield (0, emailer_1.verifymail)(emailId, user.firstName, admin_setPassword);
    }
    catch (error) {
        console.log(error);
    }
});
exports.verify = verify;
