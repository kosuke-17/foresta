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
    userId: string;
    name: string;
    jobType: string;
    email: string;
    password: string;
    spreadSheetID: string;
    githubURL?: string;
  };
};

// ユーザーIDは受け取り方が２種類ある
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
export type TokenUserData = { _id: string };
