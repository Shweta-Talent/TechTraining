import mongoose,{Schema} from "mongoose";
import { IRole } from "../interfaces/role";

const Role:Schema=new Schema<IRole>({
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

export const RoleModel=mongoose.model<IRole>("Role",Role)