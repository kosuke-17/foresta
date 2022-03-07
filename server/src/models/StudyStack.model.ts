import mongoose from "mongoose";

const StudyStackSchema = new mongoose.Schema({
  content: { type: String, required: true },
  timeStack: { type: Number, required: true },
  createdAt: { type: String, required: true },
  skillTagId: { type: String, required: true },
  userId: { type: String, required: true },
});

export const StudyStack = mongoose.model("studystack", StudyStackSchema);
