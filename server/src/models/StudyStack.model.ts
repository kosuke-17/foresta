import mongoose from "mongoose";

const StudyStackSchema = new mongoose.Schema({
  content: String,
  timeStack: Number,
  createdAt: String,
  userId: String,
});

export const StudyStack = mongoose.model("studystack", StudyStackSchema);
