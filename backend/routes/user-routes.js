import express from "express";
import { getAllUser, login, signup } from "../controller/user-controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);
router.get("/login", login);
export default router;