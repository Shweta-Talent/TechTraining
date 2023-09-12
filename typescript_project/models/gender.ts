import mongoose,{Schema} from "mongoose";
import { IGender } from "../interfaces/gender";

const Gender:Schema=new Schema({
    genderId: {
        type: String,
        required: true,
        unique: true,
      },
      gender: {
        type: String,
        required: true,
        unique: true,
      },
})

export const GenderModel=mongoose.model<IGender>("Gender",Gender)