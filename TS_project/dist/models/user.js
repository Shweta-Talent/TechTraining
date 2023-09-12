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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const User = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
    },
    password: {
        type: String,
    },
    passwordHash: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    lastModifiedAt: {
        type: Date,
    },
    lastLogin: {
        type: Date,
    },
    forcePasswordReset: {
        type: Boolean,
        default: false,
    },
    profilePicUrl: {
        type: String,
    },
    skills: {
        type: String,
    },
    verifiedStatus: {
        type: Boolean,
        default: false,
    },
    termsAndConditions: {
        type: Boolean,
        default: false,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    updateOffer: {
        type: Boolean,
        default: false,
        required: true,
    },
    userType: {
        type: String,
        enum: ["talent", "cd"],
        default: "talent",
    },
    admin_setPassword: {
        type: String,
    },
});
exports.UserModel = mongoose_1.default.model("User", User);
