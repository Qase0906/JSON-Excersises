import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  let { name, email, password, role } = req.body;

  try {
    email = email.toLowerCase();
    const user = await User.findOne({ email });

    if (user)
      return res.json({ message: `This email ${email} already exists` });

    const newUser = await User.create({ name, email, password, role });

    const token = generateToken(newUser._id);

    res.status(201).json({ token });

    next();
  } catch (error) {
    next(error);
  }
};

// Sign in

export const signIn = async (req, res, next) => {
    
  let { email, password } = req.body;

  try {
    email = email.toLowerCase();
    const user = await User.findOne({ email: email });

    if (!user || !(await user.comparePassword(password)))
      return res.status(400).json({ message: `Invalid email or password` });

    const token = generateToken(user._id);

    res.json({ token });
  } catch (error) {
    next(error);
  }
};
