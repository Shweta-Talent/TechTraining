export interface InewProject {
    projectName: string;
    internalProjectName: string;
    projectType: string;
    union: string;
    projectDescription: string;
    projectLocation: string;
    cdNameContactInfo: string;
    auditionLocation:string;
    workLocation:string;
    workDate:Date,
    auditionDate:Date,
    castingAssociateContactInfo: string;
    castingAssistantContactInfo: string;
    castingPhoneNumberContactInfo: string;
    castingEmailContactInfo: string;
    networkCreativeTeam: string;
    workDateFrom: Date;
    workDateTo: Date;
    auditionDateFrom: Date;
    auditionDateTo: Date;
    isPublished: boolean;
  }