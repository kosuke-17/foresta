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
  operationEnvs: [
    {
      operationEnvId: { type: String },
    },
  ],
  languages: [
    {
      languageId: { type: String },
    },
  ],
  frameworks: [
    {
      frameworkId: { type: String },
    },
  ],
  libraries: [
    {
      libraryId: { type: String },
    },
  ],
  OtherTools: [
    {
      otherToolId: { type: String },
    },
  ],
  devRoles: [
    {
      devRoleId: { type: String },
    },
  ],
  specSheetId: { type: String, required: true },
});

const SpecProjectSheetSchema = new mongoose.Schema({
  name: { type: String },
  startedAt: { type: String },
  finishedAt: { type: String },
  roleSharing: { type: String },
  content: { type: String },
  operationEnvs: [
    {
      operationEnvId: { type: String },
    },
  ],
  languages: [
    {
      languageId: { type: String },
    },
  ],
  frameworks: [
    {
      frameworkId: { type: String },
    },
  ],
  libraries: [
    {
      libraryId: { type: String },
    },
  ],
  OtherTools: [
    {
      otherToolId: { type: String },
    },
  ],
  devRoles: [
    {
      devRoleId: { type: String },
    },
  ],
  specSheetId: { type: String, required: true },
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
