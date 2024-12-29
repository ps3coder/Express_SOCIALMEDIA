import express from "express";
import "./config/dbconfig.js";
import { configDotenv } from "dotenv";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
configDotenv();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/user", router);
app.use("/api/blog", blogRouter);


app.get("/", (req, res) => {
  res.send("Hellow");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
