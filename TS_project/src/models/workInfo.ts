import mongoose,{ Schema } from "mongoose"
import { IWorkInfo } from "../interfaces/workInfo"

const WorkInfo:Schema=new Schema<IWorkInfo>({
  workInfoId: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
  },
  toDate: {
    type: Date,
  },
  listOfIndividualDate: {
    type: Date,
  },
  showWorkToTalent: {
    type: Boolean,
    default: false,
  },
  wordLocation: {
    tye: String, 
    required: true,
  },
  wordrequirements: {
    type: String,
    required: true,
  },
})

export const WorkInfoModel=mongoose.model<IWorkInfo>("WorkInfo",WorkInfo)

