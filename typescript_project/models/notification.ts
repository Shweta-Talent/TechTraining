import mongoose,{Schema} from "mongoose";
import { INotification } from "../interfaces/notification";

const Notification=new Schema<INotification>({
    displayName: {
        type: String,
        required:true
      },
      emailId: {
        type: String,
        required:true
      },
      notificationId:{
        type:String,
        unique:true,
        required:true
      },
      status:{
        type:String,
        enum:["inprogress", "sent" ,"failed"],
        required:true
      }
      
})

export const NotificationModel=mongoose.model<INotification>("Notification",Notification)