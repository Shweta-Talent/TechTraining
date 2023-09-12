import mongoose,{Schema} from "mongoose";
import { IEthnicityEntity } from "../interfaces/ethnicityEntity";

const EthnicityEntity:Schema=new Schema<IEthnicityEntity>({
    entityId: {
        type: String,
        required: true,
      },
    
      enthnicityId: {
        type: String,
        required: true,
      },
})

export const ethnicityEntityModel=mongoose.model<IEthnicityEntity>("EthnicityEntity",EthnicityEntity)