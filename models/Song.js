const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: { type: String, required: true }
}); 

module.exports = mongoose.model("Song", songSchema);