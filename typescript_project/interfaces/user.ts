export interface IUser{
    userId: string,
      firstName:string,
      lastName:string,
      emailId: string,
      countryCode: string,
      password: string,
      passwordHash?: string,
      createdAt?: Date,
      lastModifiedAt?: Date,
      lastLogin?: Date,
      forcePasswordReset?: boolean,
      profilePicUrl?:string,
      skills: string,
      verifiedStatus: boolean,
      termsAndConditions: boolean,
      mobileNo: number,
      status: "blocked" | "active" | "inactive"
      location: "chennai"| "banglore"
      updateOffer:boolean,
      userType: "talent"| "cd"
      admin_setPassword?: string
}