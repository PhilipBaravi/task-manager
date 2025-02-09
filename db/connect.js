import mongoose from "mongoose";

export const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((err) => console.error("DB Connection Error:", err));
};
