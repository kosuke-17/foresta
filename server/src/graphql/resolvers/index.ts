import { TechBranch, TechLeaf, TechTree } from "../../models/TechForest.model";
import { TechIdType } from "../../types/techForest";
import { studyStackMutations, studyStackQueries } from "./studyStack";
import { techForestMutations, techForestQueries } from "./techForest";
import { userMutations, userQueries } from "./user";
import { userLeafsMutation } from "./userLeafs";
import { userTodosMutations, userTodosQueries } from "./userTodos.ts";
import { userUrlsMutations } from "./userUrls";

const resolvers = {
  Query: {
    ...userQueries,
    ...userTodosQueries,
    ...techForestQueries,
    ...studyStackQueries,
  },
  Mutation: {
    ...userMutations,
    ...userUrlsMutations,
    ...userLeafsMutation,
    ...userTodosMutations,
    ...techForestMutations,
    ...studyStackMutations,
  },
  TechBranch: {
    techLeafs: async ({ _id }: TechIdType) =>
      await TechLeaf.find({ techBranch_id: _id }),
  },
  TechTree: {
    techBranches: async ({ _id }: TechIdType) =>
      await TechBranch.find({ techTree_id: _id }),
  },
  TechArea: {
    techTrees: async ({ _id }: TechIdType) =>
      await TechTree.find({ techArea_id: _id }),
  },
};

export default resolvers;
