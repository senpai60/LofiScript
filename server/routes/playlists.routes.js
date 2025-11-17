import express from "express";
import Playlist from "../models/Playlist.js";

const router = express.Router();

// ===============================
// GET ALL PLAYLISTS
// ===============================
router.get("/", async (req, res) => {
  try {
    const playlists = await Playlist.find()
      .populate("problems", "title difficulty tags") // only required info
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: playlists.length,
      playlists,
    });
  } catch (err) {
    console.error("GET PLAYLISTS ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Server error while fetching playlists",
    });
  }
});

export default router;
