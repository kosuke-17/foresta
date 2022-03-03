export type UserType = {
  user: {
    name: string;
    jobType: string;
    email: string;
    password: string;
    githubURL?: string;
    have_techLeafs?: string[];
  };
};

// ユーザーIDは受け取り方が２種類ある
export type UserIdType = {
  _id?: string;
  userId?: string;
};

export type UserTechLeafsType = {
  _id: string;
  techLeafId: string;
};

export type UserLoginType = {
  user: {
    _id: string;
    email: string;
    password: string;
  };
};
