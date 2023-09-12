import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/project";


const Project: Schema = new Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: String,
    required:true
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
    required:true
  },
  union: {
    type: String,
    required:true
  },
  projectDescription: {
    type: String,

  },
  projectLocation: {
    type: String,
    required:true
  },
  releaseToTalent: {
    type: Boolean,
    required:true
  },
  showContactInfoToTalent: {
    type: Boolean,
    required:true
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
    required:true
  },
  isActive: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    required:true
  },
  lastModifiedAt: {
    type: Date,
  },
});

export const ProjectModel = mongoose.model<IProject>("Project", Project);


