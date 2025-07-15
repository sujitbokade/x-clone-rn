import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (_, res) => res.send("Hello from server"));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log("Server is running on PORT:", ENV.PORT)
    );
  } catch (error) {
    console.log("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
