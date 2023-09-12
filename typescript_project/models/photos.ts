import mongoose,{Schema} from "mongoose";
import { IPhotos } from "../interfaces/photos";

const Photo:Schema=new Schema<IPhotos>({
    photoId: {
        type: String,
        required: true,
      },
      entityid: {
        type: String,
        required:true
      },
      url: {
        type: String,
required:true
      },
})

export const PhotoModel=mongoose.model<IPhotos>("Photos",Photo)