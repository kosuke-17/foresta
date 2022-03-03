import mongoose from "mongoose";

const SpecSheetSchema = new mongoose.Schema({
  selfIntro: { type: String, required: true },
  studyOnOwnTime: { type: String, required: true },
  certification: { type: String, required: true },
  prevJobs: [
    {
      content: { type: String, required: true },
    },
  ],
  userId: { type: String, required: true },
});

export const SpecSheets = mongoose.model("specsheet", SpecSheetSchema);
