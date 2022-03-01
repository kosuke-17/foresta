import { TechBranch, TechLeaf, TechTree } from "../../models/TechForest.model";
import { studyStackMutations, studyStackQueries } from "./studyStack";
import { techForestMutations, techForestQueries } from "./techForest";
import { userMutations, userQueries } from "./user";
import { userUrlsMutations } from "./userUrls";

const resolvers = {
  Query: {
    ...userQueries,
    ...techForestQueries,
    ...studyStackQueries,
  },
  Mutation: {
    ...userMutations,
    ...userUrlsMutations,
    ...techForestMutations,
    ...studyStackMutations,
  },
  TechBranch: {
    techLeafs: async ({ _id }: any) =>
      await TechLeaf.find({ techBranch_id: _id }),
  },
  TechTree: {
    techBranches: async ({ _id }: any) =>
      await TechBranch.find({ techTree_id: _id }),
  },
  TechArea: {
    techTrees: async ({ _id }: any) => {
      return await TechTree.find({ techArea_id: _id });
    },
  },
};

export default resolvers;
