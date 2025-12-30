import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(404).json({ message: "No users available" });
  res.json(users);
};
