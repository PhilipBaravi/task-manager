import express from "express";
import { router as tasks } from "./routes/tasks.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
