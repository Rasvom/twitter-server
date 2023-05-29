const mongoose = require("mongoose");

const TweetSchhema = mongoose.Schema({
  description: String,
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});

const Tweet = mongoose.model("Tweet", TweetSchhema);

module.exports = Tweet;
