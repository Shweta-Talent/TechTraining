"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.login = exports.signup = void 0;
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt = __importStar(require("bcrypt"));
const user_1 = require("../models/user");
const emailer_1 = require("../utils/emailer");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, emailId, mobileNo, password, termsAndConditions, location, updateOffer, userType, } = req.body;
    try {
        const validator = firstName &&
            lastName &&
            emailId &&
            mobileNo &&
            password &&
            termsAndConditions &&
            location &&
            updateOffer &&
            userType;
        if ((typeof validator === "string" && validator.length < 0) ||
            typeof validator === undefined) {
            return res.status(500).send({
                status: "Failed",
                message: "Something is left to be filled",
            });
        }
        if (termsAndConditions == false) {
            return res.send({
                status: "failed",
                message: "Need to agree to terms and condition",
            });
        }
        const result = yield user_1.UserModel.findOne({ emailId });
        if (result)
            throw Error("user exist");
        const user = new user_1.UserModel({
            userId: (0, uuid_1.v4)(),
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            mobileNo: mobileNo,
            termsAndConditions: termsAndConditions,
            location: location,
            updateOffer: updateOffer,
            password: password,
            userType: userType,
        });
        const hashedPassword = bcrypt.hashSync(password, 10);
        user.passwordHash = hashedPassword;
        const data = yield user.save();
        yield (0, emailer_1.WELCOME)(emailId, firstName);
        return res.send({
            status: "success",
            message: "User Created Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body: { emailId, password }, } = req;
    if ((typeof emailId && typeof password === "string" && emailId.length < 0) ||
        password.length < 0 ||
        typeof emailId ===
            undefined ||
        typeof password === undefined)
        throw Error("email and password are required");
    try {
        const user = yield user_1.UserModel.findOne({ emailId });
        if (!user)
            throw Error("no user found");
        if (typeof user.passwordHash === "string") {
            const result = yield bcrypt.compare(password, user.passwordHash);
        }
        if (user.status == "blocked")
            return res.send({
                status: 400,
                message: "you are blocked contact support team",
            });
        if (user.userType == "cd" && user.verifiedStatus == false)
            return res.send({ status: 400, message: "verify your account" });
        if (user.forcePasswordReset == false)
            return res.send({ status: 400, message: "reset your password" });
        const token = jsonwebtoken_1.default.sign({
            userType: user.userType,
            emailId,
            useId: user.userId,
        }, process.env.SECRET_KEY || "");
        res.json({ token });
        console.log(token);
        return res.json({ status: "success", message: "login successfull" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;
