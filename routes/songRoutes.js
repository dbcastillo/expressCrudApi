const express = require("express");
const Song = require("../models/Song");

const router = express.Router();

// Create (POST)
router.post("/", async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All (GET)
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get by ID (GET)
router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Item (PUT)
router.put("/:id", async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      return res.status(400).json({ message: "Update data is required" });
    }

    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedSong) return res.status(404).json({ message: "Song not found" });

    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) return res.status(404).json({ message: "Song not found" });

    res.json({ message: "Song deleted", deletedSong });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
