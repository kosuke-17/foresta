export type UserType = {
  user: {
    name: String;
    jobType: String;
    email: String;
    password: String;
    githubURL?: String;
    have_techLeafs?: String[];
  };
};

// ユーザーIDは受け取り方が２種類ある
export type UserIdType = {
  _id?: String;
  userId?: String;
};

export type UserTechLeafsType = {
  _id: String;
  techLeafId: string;
};

export type UserLoginType = {
  user: {
    _id: String;
    email: String;
    password: String;
  };
};
