import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getBlogById,
  deleteBlogById,
  getByUserId,
} from "../controller/blog-controller.js";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", getBlogById);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/:id", deleteBlogById);
blogRouter.get("/user/:id", getByUserId);
export default blogRouter;
