import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

export const Task = mongoose.model("Task", TaskSchema);
