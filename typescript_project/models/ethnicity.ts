import mongoose,{Schema} from "mongoose";
import { IEthnicity } from "../interfaces/ethnicity";
const Ethnicity:Schema =new Schema<IEthnicity>({
    ethnicity: {
        type: String,
        required: true,
      },
      ethnicityId: {
        type: String,
        required:true
      },
})

export const EthnicityModel=mongoose.model<IEthnicity>("Ethnicity",Ethnicity)

