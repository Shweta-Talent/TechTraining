import mongoose,{Schema,} from "mongoose";
import { IDateEntity } from "../interfaces/dateEntity";


const DateEntity:Schema=new Schema<IDateEntity>({
    entityId: {
        type: String,
        required: true,
      },
      entityType: {
        type: String,
       required:true
      },
      date: {
        type: Date,
        required: true,
      },
})

export const DateEntityModel=mongoose.model<IDateEntity>("DateEntity",DateEntity)

