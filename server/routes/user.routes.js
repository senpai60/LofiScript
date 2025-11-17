import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/users.controller.js";
import { protect } from "../middleware/authVerify.middleware.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

// Get logged-in user (for AuthContext)
router.get("/me", protect, (req, res) => {
  res.json({ user: req.user });
});

export default router;
