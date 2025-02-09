import { connectDB } from "./db/connect.js";
import express from "express";
import { router as tasks } from "./routes/tasks.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
