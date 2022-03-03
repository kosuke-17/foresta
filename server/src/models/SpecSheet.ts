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

export const SpecSheets = mongoose.model("specsheet", SpecSheetSchema);
