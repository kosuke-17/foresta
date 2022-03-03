export type TechIdType = {
  _id: string;
};
export type TechLeafType = {
  techLeaf: {
    name: string;
    techBranch_id: string;
  };
};
export type TechBranchType = {
  techBranch: {
    name: string;
    techTree_id: string;
  };
};
export type TechTreeType = {
  techTree: {
    name: string;
    techArea_id: string;
  };
};
export type TechAreaType = {
  techArea: {
    name: string;
  };
};
