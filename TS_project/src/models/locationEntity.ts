import mongoose,{Schema} from "mongoose";
import { ILocationEntity } from "../interfaces/locationEntity";

const LocationEntity:Schema=new Schema<ILocationEntity>({

        entityId: {
          type: String,
          required: true,
        },
        entityType: {
          type: String,
          enum: ["work", "audition", "project", "role"],
          required:true
        },
        locationId: {
          type: String,
          required: true,
        },
})

export const LocationEntityModel=mongoose.model<ILocationEntity>("LocationEntity",LocationEntity)