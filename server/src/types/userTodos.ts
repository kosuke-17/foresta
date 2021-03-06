export type TodoAddType = {
  todo: {
    title: string;
    description: string;
    startedAt: string;
    finishedAt: string;
    isStatus: boolean;
    userToken: string;
  };
};

export type TodoIdType = {
  todoId: string;
};

export type TodoUpdateType = {
  todo: {
    todoId: string;
    title: string;
    description: string;
    startedAt: string;
    finishedAt: string;
    isStatus: boolean;
  };
};
