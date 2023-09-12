export interface IProject {
    projectId?: string;
    createdBy?: string;
    projectName?: string;
    internalProjectName?: string;
    projectType?: string;
    union: string;
    projectDescription: string;
    projectLocation: string;
    releaseToTalent: string;
    showContactInfoToTalent?: boolean;
    showNetworkToTalent?: boolean;
    showCastingAssociateToTalent?: boolean;
    showCastingAssistantToTalent?: boolean;
    showContactNumberToTalent?: boolean;
    showContantEmailToTalent?: boolean;
    cdNameContactInfo?: string;
    castingAssociateContactInfo?: string;
    castingAssistantContactInfo?: string;
    castingPhoneNumberContactInfo?: string;
    castingEmailContactInfo?: string;
    networkCreativeTeam?: string;
    castingAssociateCreativeTeam?: string;
    castingAssistantCreativeTeam?: string;
    contactPhoneNumberCreativeTeam?: string;
    contactEmailCreativeTeam?: string;
    projectSynopsis?: string;
    projectAdditionalDetails?: string;
    additionalFileLink?: string;
    isPublished: string;
    isActive: string;
    createdAt: string;
    lastModifiedAt?: string;
  }