import express from "express";
import Problem from "../models/Problem.js";
import Playlist from "../models/Playlist.js";
import { problemsSeed } from "../data/problemSeed.js";

const router = express.Router();

// AUTO INJECT PROBLEMS + CREATE PLAYLIST
router.get("/", async (req, res) => {
  try {
    // 1) DELETE OLD PROBLEMS
    await Problem.deleteMany();

    // 2) INSERT NEW PROBLEMS
    const insertedProblems = await Problem.insertMany(problemsSeed);

    // 3) DELETE OLD PLAYLISTS
    await Playlist.deleteMany();

    // 4) CREATE NEW PLAYLIST WITH ALL PROBLEMS
    const playlist = await Playlist.create({
      playlistName: "Best JS 30+",
      problems: insertedProblems.map(p => p._id),  // insert IDs
      tags: ["javascript", "logic", "beginner"]
    });

    // RESPONSE
    res.json({
      success: true,
      message: "Problems injected AND playlist created successfully!",
      totalProblemsInserted: insertedProblems.length,
      playlist
    });

  } catch (err) {
    console.error("🔥 Injection Error:", err);
    res.status(500).json({ success: false, message: "Error injecting problems and creating playlist" });
  }
});

export default router;
