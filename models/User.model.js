const mongoose = require("mongoose");

const UserSchhema = mongoose.Schema({
  userName: String,
  saves: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Tweet" }],
});

const User = mongoose.model("User", UserSchhema);

module.exports = User;
