const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: { type: String, required: true }
}); // used for request body to determine it's structure

module.exports = mongoose.model("Song", songSchema);

/*
[
    {
        "_id": "67ae158add17093dc475e717",
        "name": "Sample Item",
        "description": "This is a sample item.",
        "__v": 0
    }
]

mongo automatically generates a unique objectId (_id) for each document in a collection
mongo also uses the (- -v) to track the version. increments each time the documents is updated
*/