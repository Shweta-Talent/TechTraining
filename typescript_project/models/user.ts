import mongoose,{Schema} from "mongoose";
import { IUser } from "../interfaces/user";


const User:Schema =new Schema<IUser>({
    userId: {
        type: String,
        required:true
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      emailId: {
        type: String,
        required: true,
      },
      countryCode: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      passwordHash: {
        type: String,
      },
      createdAt: {
        type: Date,
      },
      lastModifiedAt: {
        type: Date,
      },
      lastLogin: {
        type: Date,
      },
      forcePasswordReset: {
        type: Boolean,
        default: false,
      },
      profilePicUrl: {
        type: String,
      },
      skills: {
        type: String,
        required: true,
      },
      verifiedStatus: {
        type: Boolean,
        default: false,
        required: true,
      },
      termsAndConditions: {
        type: Boolean,
        default: false,
        required: true,
      },
      mobileNo: {
        type: Number,
        required: true,
      },
      status: {
       type:String,
       required: true,
      },
      location: {
       type:String,
       required: true,
      },
      updateOffer: {
        type: Boolean,
        default: false,
        required: true,
      },
      userType: {
        type: String,
        enum: ["talent", "cd"],
        default: "talent",
        required: true,
      },
      admin_setPassword: {
        type: String,
      },
})


export const UserModel=mongoose.model<IUser>("User",User)

