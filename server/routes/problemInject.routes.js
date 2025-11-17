import express from "express";
import Problem from "../models/Problem.js";
import { problemsSeed } from "../data/problemSeed.js";

const router = express.Router();

// AUTO INJECT 20 PROBLEMS
router.get("/", async (req, res) => {
  try {
    await Problem.deleteMany();       // clear old
    const inserted = await Problem.insertMany(problemsSeed);

    res.json({
      message: "20 problems inserted successfully!",
      count: inserted.length,
    });
  } catch (err) {
    console.error("Error inserting problems:", err);
    res.status(500).json({ message: "Error injecting problems" });
  }
});

export default router;
