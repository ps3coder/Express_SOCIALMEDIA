import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();

const DBURL = process.env.DBURL;

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.error(error.message);
  });

export default mongoose;
