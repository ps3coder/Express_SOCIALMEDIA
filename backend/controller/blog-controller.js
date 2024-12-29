import Blog from "../models/blog.js";
import User from "../models/user.js";
import mongoose from "mongoose";

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({ message: "No Blog found" });
    } else {
      return res.status(200).json({ blogs });
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: "Error to fetch" });
  }
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;

  try {
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Unable to find user by this ID" });
    }
    const blog = new Blog({ title, description, image, user });

    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);

    await existingUser.save({ session });

    await session.commitTransaction();

    return res.status(200).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while adding the blog" });
  }
};

export const updateBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blogId = req.params.id;

  try {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
      image,
      user,
    });
    if (!blog) {
      return res.status(500).json({ message: "Unable to update" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "unable to update" });
  }
};

export const getBlogById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Blog not found" });
  }
};

export const deleteBlogById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findByIdAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Blog not deleted" });
  }
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  try {
    userBlogs = await User.findById(userId).populate("blog");
    return res.status(200).json({ blog: userBlogs });
  } catch (error) {
    console.error(error);
    return res.statu(404).json({ message: "No blog found" });
  }
};
