import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import { setCookie } from "../utils/setCookie.js";

// ---------------------- REGISTER ----------------------
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already exists" });

    const newUser = await User.create({
      name,
      email,
      password, // bcrypt handled inside model
    });

    const token = generateToken(newUser._id);
    setCookie(res, token);

    return res.status(201).json({
      message: "Registration successful",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------- LOGIN ----------------------
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email & password required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User does not exist" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    setCookie(res, token);

    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------- LOGOUT ----------------------
export const logoutUser = async (req, res) => {
  res.clearCookie("access_token");
  return res.json({ message: "Logged out" });
};
