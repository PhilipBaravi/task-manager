import { Task } from "../models/Task.js";

export const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

export const updateTask = (req, res) => {
  res.send("Update a task");
};

export const deleteTask = (req, res) => {
  res.send("Delete a task");
};
