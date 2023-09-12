export interface IRole{
    roleId:boolean
      projectId: string
      roleName:string
      internalRoleName: string
      roleType: string
      intendToPublishRole: boolean
      releaseRoleToBillbord: boolean
      roleLocation: string
      payingRole: boolean
      roleRate:string
      roleAgeInYear:boolean
      roleAgeFrom: number
      roleAgeTo: number
      roleGenderSpecified: boolean
      allowedGenders: string
      roleEthnicAppearanceSpecified:boolean
      ethnicityIds:string
      roleEthnicity:string
      noOfTalent: number
      roleDescription: string
      recommendedSkills?: string
      slidesUrl?: string
      involveSexualSituations: boolean
      involveNudity?: boolean
      showAuditionLocationToTalent: boolean
      auditionLocation: string
      fromDate?:Date
      toDate?: Date
      listOfIndividualDates?: Date
      additionalAuditionNotes?: string
      showWorkLocation: boolean
      workLocation: string
      workFromDate?: Date
      workToDate?: Date
      workIndividualDates?:Date
      workRequirements?: string
      submissionDueBy?: Date
      submissionNotes: string
      askPhoto: number
      askVideo: number
      askAudio: number
}