import mongoose,{Schema} from "mongoose";
import { ISkills } from "../interfaces/skills";

const Skills:Schema=new Schema<ISkills>({
    skillId: {
        type: String,
        required: true,
      },
      skillName: {
        type: String,
        required: true,
      },
})

export const SkillModel =mongoose.model<ISkills>("Skills",Skills)