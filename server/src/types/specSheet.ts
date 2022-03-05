export type SpecSheetIdType = {
  specProjectId: string;
};
export type SpecSheetType = {
  specSheet: {
    specSheetId: string;
    selfIntro: string;
    studyOnOwnTime: string;
    certification: string;
    prevJobs: string[];
  };
};

export type SpecUserInfoType = {
  specUserInfo: {
    specUserInfoId: string;
    stuffID: string;
    age: number;
    gender: string;
    nearestStation: string;
    startWorkDate: string;
    seExpAmount: number;
    pgExpAmount: number;
    itExpAmount: number;
    specSheetId: string;
  };
};

export type SpecTechInfoType = {
  specTechInfo: {
    specTechInfoId: string;
    operationEnvs: string[];
    languages: string[];
    frameworks: string[];
    libraries: string[];
    OtherTools: string[];
    devRoles: string[];
    specSheetId: string;
  };
};

export type SpecProjectType = {
  specProject: {
    specProjectId?: string;
    name: string;
    startedAt: string;
    finishedAt: string;
    roleSharing: string;
    memberCount: number;
    content: string;
    operationEnvs: string[];
    languages: string[];
    frameworks: string[];
    libraries: string[];
    OtherTools: string[];
    devRoles: string[];
    specSheetId: string;
  };
};
