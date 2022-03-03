export type StudyStackIdType = {
  studyStackId: string;
};
export type StackAddType = {
  stack: {
    content: string;
    timeStack: string;
    createdAt: string;
    skillTagId: string;
    userId: string;
  };
};
export type StackUpdateType = {
  stack: {
    studyStackId: string;
    content: string;
    timeStack: string;
    createdAt: string;
    skillTagId: string;
    userId: string;
  };
};
