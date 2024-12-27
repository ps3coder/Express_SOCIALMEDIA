import express from "express";
import "./config/dbconfig.js";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hellow");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
