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
exports.RoleModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const Role = new mongoose_1.Schema({
    roleId: {
        type: Boolean,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
    },
    roleName: {
        type: String,
        required: true,
    },
    internalRoleName: {
        type: String,
        required: true,
    },
    roleType: {
        type: String,
        required: true,
    },
    intendToPublishRole: {
        type: Boolean,
        default: true,
        required: true,
    },
    releaseRoleToBillbord: {
        type: Boolean,
        default: false,
        required: true,
    },
    roleLocation: {
        type: String,
        required: true,
    },
    payingRole: {
        type: Boolean,
        default: true,
        required: true,
    },
    roleRate: {
        type: String,
    },
    roleAgeInYear: {
        type: Boolean,
        default: true,
        required: true,
    },
    roleAgeFrom: {
        type: Number,
        required: true,
    },
    roleAgeTo: {
        type: Number,
        required: true,
    },
    roleGenderSpecified: {
        type: Boolean,
        default: false,
        required: true,
    },
    allowedGenders: {
        type: String,
        required: true,
    },
    roleEthnicAppearanceSpecified: {
        type: Boolean,
        required: true,
    },
    ethnicityIds: {
        type: String,
        required: true,
    },
    roleEthnicity: {
        type: String,
        required: true,
    },
    noOfTalent: {
        type: Number,
        required: true,
    },
    roleDescription: {
        type: String,
        required: true,
    },
    recommendedSkills: {
        type: String,
    },
    slidesUrl: {
        type: String,
    },
    involveSexualSituations: {
        type: Boolean,
        default: false,
        required: true,
    },
    involveNudity: {
        type: Boolean,
        default: false,
    },
    showAuditionLocationToTalent: {
        type: Boolean,
        default: false,
        required: true,
    },
    auditionLocation: {
        type: String,
        required: true,
    },
    fromDate: {
        type: Date,
        default: undefined,
    },
    toDate: {
        type: Date,
        default: undefined,
    },
    listOfIndividualDates: {
        type: Date,
        default: undefined,
    },
    additionalAuditionNotes: {
        type: String,
    },
    showWorkLocation: {
        type: Boolean,
        default: false,
        required: true,
    },
    workLocation: {
        type: String,
        required: true,
    },
    workFromDate: {
        type: Date,
        default: undefined,
    },
    workToDate: {
        type: Date,
        default: undefined,
    },
    workIndividualDates: {
        type: Date,
        default: undefined,
    },
    workRequirements: {
        type: String,
    },
    submissionDueBy: {
        type: Date,
        default: undefined,
    },
    submissionNotes: {
        type: String,
    },
    askPhoto: {
        type: Number,
        default: 0,
    },
    askVideo: {
        type: Number,
        default: 0,
    },
    askAudio: {
        type: Number,
        default: 0,
    },
});
exports.RoleModel = mongoose_1.default.model("Role", Role);
