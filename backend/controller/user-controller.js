import User from "../models/user.js";

const getAllUser = async (req, res, next) => {
  try {
      const users = await User.find();
        if (!users) {
            return res.status(404).json({ 'No user found'});
      }
      return res.status(200).json({users})
  } catch (error) {
    console.log(error);
  }
};
