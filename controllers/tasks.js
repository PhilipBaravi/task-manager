export const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

export const createTask = (req, res) => {
  res.json(req.body);
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
