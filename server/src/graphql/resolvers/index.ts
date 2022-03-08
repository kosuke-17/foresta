import {
  Portfolio,
  SpecProjectSheet,
  SpecTechInfoSheet,
  SpecUserInfoSheet,
} from "../../models/SpecSheet.model";
import { TechBranch, TechLeaf, TechTree } from "../../models/TechForest.model";
import { UserLeafs, UserUrls } from "../../models/User.model";
import { IdType } from "../../types";
import { specSheetMutations, specSheetQueries } from "./specSheet";
import { sepreadSheetQueries, spreadSheetMutations } from "./spreadSheet";
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
    ...sepreadSheetQueries,
  },
  Mutation: {
    ...userMutations,
    ...userUrlsMutations,
    ...userLeafsMutations,
    ...userTodosMutations,
    ...techForestMutations,
    ...studyStackMutations,
    ...specSheetMutations,
    ...spreadSheetMutations,
  },
  TechBranch: {
    techLeafs: async ({ _id }: IdType) =>
      await TechLeaf.find({ techBranch_id: _id }),
  },
  TechTree: {
    techBranches: async ({ _id }: IdType) =>
      await TechBranch.find({ techTree_id: _id }),
  },
  TechArea: {
    techTrees: async ({ _id }: IdType) =>
      await TechTree.find({ techArea_id: _id }),
  },
  SpecSheet: {
    userInfo: async ({ _id }: IdType) =>
      await SpecUserInfoSheet.findOne({ specSheetId: _id }),
    techInfo: async ({ _id }: IdType) =>
      await SpecTechInfoSheet.findOne({ specSheetId: _id }),
    project: async ({ _id }: IdType) =>
      await SpecProjectSheet.find({ specSheetId: _id }),
  },
  User: {
    userLeafs: async ({ _id }: IdType) =>
      await UserLeafs.findOne({ userId: _id }),
    userUrls: async ({ _id }: IdType) =>
      await UserUrls.findOne({ userId: _id }),
    portfolio: async ({ _id }: IdType) => await Portfolio.find({ userId: _id }),
  },
};

export default resolvers;
