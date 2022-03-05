import {
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../models/SpecSheet.model";
import { TechBranch, TechLeaf, TechTree } from "../../models/TechForest.model";
import { TechIdType } from "../../types/techForest";
import { specSheetMutations, specSheetQueries } from "./specSheet";
import { studyStackMutations, studyStackQueries } from "./studyStack";
import { techForestMutations, techForestQueries } from "./techForest";
import { userMutations, userQueries } from "./user";
import { userLeafsMutations } from "./userLeafs";
import { userTodosMutations, userTodosQueries } from "./userTodos.ts";
import { userUrlsMutations } from "./userUrls";

const resolvers = {
  Query: {
    ...userQueries,
    ...userTodosQueries,
    ...techForestQueries,
    ...studyStackQueries,
    ...specSheetQueries,
  },
  Mutation: {
    ...userMutations,
    ...userUrlsMutations,
    ...userLeafsMutations,
    ...userTodosMutations,
    ...techForestMutations,
    ...studyStackMutations,
    ...specSheetMutations,
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
  SpecSheet: {
    userInfo: async ({ _id }: any) =>
      await SpecUserInfoSheet.findOne({ specSheetId: _id }),
    techInfo: async ({ _id }: any) =>
      await SpecTechInfoSheet.findOne({ specSheetId: _id }),
  },
};

export default resolvers;
