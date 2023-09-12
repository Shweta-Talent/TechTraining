import mongoose,{Schema} from "mongoose";
import { IGenderEntity } from "../interfaces/genderEntity";

const GenderEntity:Schema=new Schema<IGenderEntity>({
    entityId: {
        type: String,
        required: true,
      },
    
      genderId: {
        type: String,
        required: true,
      },
})

export const GenderentityModel=mongoose.model<IGenderEntity>("GenderEntity",GenderEntity)