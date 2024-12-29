import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .statu(400)
        .json({ message: "User already exist , You can login" });
    }
    return res.status(200).json({ existingUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  const hashedPassword = await bcrypt.hashSync(password, 12);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });

  try {
    await user.save();
    return res.status(201).json({ user: { name, email } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to save user" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  } else {
    return res.status(200).json({ message: "Login Successfull" });
  }
};