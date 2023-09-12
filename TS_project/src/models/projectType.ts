import mongoose,{Schema} from "mongoose";
import { IProjectType } from "../interfaces/projectType";

const ProjectType:Schema =new Schema<IProjectType>({
    projectTypeId: {
        type: String,
        required:true
      },
      projectType: {
        type: String,
        required:true
      },
})

export const ProjectTypeModel=mongoose.model<IProjectType>("ProjectModel",ProjectType)