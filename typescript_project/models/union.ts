import mongoose,{Schema} from "mongoose";
import { IUnion } from "../interfaces/union";

const Union:Schema=new Schema({
    unionId: {
        type: String,
        required:true
      },
      unionName: {
        type: String,
        required: true,
      },
})

export const UnionModel=mongoose.model<IUnion>("Union",Union)