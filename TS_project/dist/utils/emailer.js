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
exports.resetpassword = exports.verifymail = exports.WELCOME = void 0;
const sgMail = require("@sendgrid/mail");
const sgconfig_1 = require("../config/sgconfig");
if (process.env.SG_API === "string")
    sgMail.setApiKey(process.env.SG_API);
sgconfig_1.TEMPLATE_ID.WELCOME;
const WELCOME = (emailId, firstName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = {
            to: emailId,
            from: sgconfig_1.FROM_MAIL,
            templateId: sgconfig_1.TEMPLATE_ID.WELCOME,
            dynamicTemplateData: {
                Name: firstName,
            },
        };
        const awaitresult = sgMail.send(message);
    }
    catch (error) {
        console.log(error);
    }
});
exports.WELCOME = WELCOME;
const verifymail = (emailId, firstName, admin_setPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = {
            to: emailId,
            from: sgconfig_1.FROM_MAIL,
            subject: "email verification",
            text: `hello ${firstName}, this is your password to login ${admin_setPassword} and to reset the password visit the following link localhost:3001/user/resetpassword`,
        };
        const awaitresult = sgMail.send(message);
    }
    catch (error) {
        console.log(error);
    }
});
exports.verifymail = verifymail;
const resetpassword = (emailId, firstName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = {
            to: emailId,
            from: sgconfig_1.FROM_MAIL,
            templateId: sgconfig_1.TEMPLATE_ID.RESETPASSWORD,
            dynamicTemplateData: {
                Name: firstName,
            },
        };
        const awaitresult = sgMail.send(message);
        console.log("mail sent successfully");
    }
    catch (error) {
        console.log(error);
    }
});
exports.resetpassword = resetpassword;
