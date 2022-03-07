import mongoose from "mongoose";

const SpecSheetSchema = new mongoose.Schema({
  selfIntro: { type: String },
  studyOnOwnTime: { type: String },
  certification: { type: String },
  prevJobs: [
    {
      content: { type: String },
    },
  ],
  userId: { type: String },
});

const SpecUserInfoSheetSchema = new mongoose.Schema({
  stuffID: { type: String },
  age: { type: Number },
  gender: { type: String },
  nearestStation: { type: String },
  startWorkDate: { type: String },
  seExpAmount: { type: Number },
  pgExpAmount: { type: Number },
  itExpAmount: { type: Number },
  specSheetId: { type: String },
});

const SpecTechInfoSheetSchema = new mongoose.Schema({
  operationEnvs: { type: [String] },
  languages: { type: [String] },
  frameworks: { type: [String] },
  libraries: { type: [String] },
  otherTools: { type: [String] },
  devRoles: { type: [String] },
  specSheetId: { type: String, required: true },
});

const SpecProjectSheetSchema = new mongoose.Schema({
  name: { type: String },
  startedAt: { type: String },
  finishedAt: { type: String },
  roleSharing: { type: String },
  memberCount: { type: Number },
  content: { type: String },
  operationEnvs: { type: [String] },
  languages: { type: [String] },
  frameworks: { type: [String] },
  libraries: { type: [String] },
  otherTools: { type: [String] },
  devRoles: { type: [String] },
  specSheetId: { type: String, required: true },
});

const PortfolioSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  img: { type: String },
  portfolioURL: { type: String },
  userId: { type: String, required: true },
  specSheetId: { type: String, required: true },
});

const SkillSchema = new mongoose.Schema({
  name: { type: String },
  data: { type: [String] },
});

export const SpecSheet = mongoose.model("specsheet", SpecSheetSchema);
export const SpecUserInfoSheet = mongoose.model(
  "specuserinfosheet",
  SpecUserInfoSheetSchema
);

export const SpecTechInfoSheet = mongoose.model(
  "spectechinfosheet",
  SpecTechInfoSheetSchema
);

export const SpecProjectSheet = mongoose.model(
  "specprojectsheet",
  SpecProjectSheetSchema
);
export const Portfolio = mongoose.model("portfolio", PortfolioSchema);

export const Skill = mongoose.model("skill", SkillSchema);
