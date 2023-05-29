const mongoose = require("mongoose");

const CommentSchhema = mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  tweetId: { type: mongoose.SchemaTypes.ObjectId, ref: "Tweet" },
  description: String,
});

const Comment = mongoose.model("Comment", CommentSchhema);

module.exports = Comment;
