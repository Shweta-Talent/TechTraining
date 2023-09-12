import mongoose,{Schema} from "mongoose";
import { ISkillEntity } from "../interfaces/skillEntity";

const SkillEntity:Schema =new Schema<ISkillEntity>({
    entityId: {
        type: String,
        required: true,
      },
      entityType: {
        type: String,
        enum: ["user", "role"],
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
})

export const SkillEnityModel=mongoose.model<ISkillEntity>("SkillEntity",SkillEntity)