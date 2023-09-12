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
exports.ProjectModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const Project = new mongoose_1.Schema({
    projectId: {
        type: String,
        required: true,
        unique: true,
    },
    createdBy: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true,
    },
    internalProjectName: {
        type: String,
        required: true,
    },
    projectType: {
        type: String,
        required: true
    },
    union: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
    },
    projectLocation: {
        type: String,
        required: true
    },
    releaseToTalent: {
        type: Boolean,
    },
    showContactInfoToTalent: {
        type: Boolean,
    },
    showNetworkToTalent: {
        type: Boolean,
    },
    showCastingAssociateToTalent: {
        type: Boolean,
    },
    showCastingAssistantToTalent: {
        type: Boolean,
    },
    showContactNumberToTalent: {
        type: Boolean,
    },
    showContantEmailToTalent: {
        type: Boolean,
    },
    cdNameContactInfo: {
        type: String,
    },
    castingAssociateContactInfo: {
        type: String,
    },
    castingAssistantContactInfo: {
        type: String,
    },
    castingPhoneNumberContactInfo: {
        type: String,
    },
    castingEmailContactInfo: {
        type: String,
    },
    networkCreativeTeam: {
        type: String,
    },
    castingAssociateCreativeTeam: {
        type: String,
    },
    castingAssistantCreativeTeam: {
        type: String,
    },
    contactPhoneNumberCreativeTeam: {
        type: String,
    },
    contactEmailCreativeTeam: {
        type: String,
    },
    projectSynopsis: {
        type: String,
    },
    projectAdditionalDetails: {
        type: String,
    },
    additionalFileLink: {
        type: String,
    },
    isPublished: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    lastModifiedAt: {
        type: Date,
    },
});
exports.ProjectModel = mongoose_1.default.model("Project", Project);
