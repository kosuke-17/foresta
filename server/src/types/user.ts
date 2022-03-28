export type UserCreateType = {
  user: {
    name: string;
    jobType: string;
    email: string;
    password: string;
    spreadSheetID: string;
    githubURL?: string;
  };
};
export type UserUpdateType = {
  user: {
    userToken: string;
    name: string;
    jobType: string;
    email: string;
    password: string;
    spreadSheetID: string;
    githubURL?: string;
  };
};

export type UserIdType = { userId: string };

export type UserTechLeafsType = {
  _id: string;
  techLeafId: string;
};

export type UserLoginType = {
  user: {
    email: string;
    password: string;
  };
};

export type TokenPayload = {
  user: {
    _id: string;
  };
  iat: number;
  exp: number;
};

export type UserToken = { userToken: string };
export type UserUuid = { userUuid: string };
export type TokenUserData = { _id: string };
