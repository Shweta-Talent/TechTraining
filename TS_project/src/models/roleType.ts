import mongoose,{Schema} from "mongoose";
import { IRoleType } from "../interfaces/roleType";

const RoleType:Schema =new Schema<IRoleType>({
    roleId: {
        type: String,
        required: true,
      },
      roleType: {
        type: String,
        required: true,
      },
})

export const RoleTypeModel=mongoose.model<IRoleType>("RoleType",RoleType)