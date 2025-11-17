import express from "express";
import Playlist from "../models/Playlist.js";
import Problem from "../models/Problem.js";

const router = express.Router();

// AUTO CREATE PLAYLIST WITH ALL PROBLEMS
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find({}, "_id");

    if (problems.length === 0) {
      return res.status(400).json({ message: "No problems found! Inject problems first." });
    }

    // Remove old playlists if needed
    await Playlist.deleteMany();

    const playlist = await Playlist.create({
      playlistName: "All Beginner Problems",
      problems: problems.map(p => p._id),  // Insert only IDs
      tags: ["beginner", "logic"]
    });

    res.json({
      message: "Playlist created successfully!",
      playlist,
    });

  } catch (err) {
    console.error("PLAYLIST INJECT ERROR:", err);
    res.status(500).json({ message: "Server error while creating playlist" });
  }
});

export default router;
