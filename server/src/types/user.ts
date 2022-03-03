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

export type UserIdType = {
  userId: String;
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

