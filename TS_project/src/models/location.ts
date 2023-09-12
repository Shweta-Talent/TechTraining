import mongoose,{Schema} from "mongoose";
import { ILocation } from "../interfaces/location";

const Location:Schema=new Schema<ILocation>({
    locationId: {
        type: String,
        required: true,
        unique: true,
      },
      locationName: {
        type: String,
        required: true,
        unique: true,
      },
})

export const LocationModel=mongoose.model<ILocation>("Location",Location)