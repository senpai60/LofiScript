import express from "express";
import Playlist from "../models/Playlist.js";
import Problem from "../models/Problem.js";
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

router.get('/:playlistId', async (req, res) => {
  const { playlistId } = req.params;

  try {
    const playlist = await Playlist.findById(playlistId)
      .populate('problems'); // populate full problem documents

    if (!playlist) {
      return res.status(404).json({
        success: false,
        message: 'Playlist not found'
      });
    }

    res.json({
      success: true,
      playlistName: playlist.playlistName,
      problemCount: playlist.problems.length,
      problems: playlist.problems
    });
  } catch (err) {
    console.error('GET PLAYLIST PROBLEMS ERROR:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching playlist problems'
    });
  }
});

// ===============================
// GET SINGLE PROBLEM BY ID
// ===============================
router.get('/problem/:problemId', async (req, res) => {
  const { problemId } = req.params;

  try {
    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: 'Problem not found'
      });
    }

    res.json({
      success: true,
      problem
    });
  } catch (err) {
    console.error('GET PROBLEM ERROR:', err);
    
    // Handle invalid ObjectId format
    if (err.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid problem ID format'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while fetching problem'
    });
  }
});



export default router;
