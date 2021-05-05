const mongoose = require("mongoose");

var PostMessage = mongoose.model(
  "PostMessage",
  {
    title: { type: String },
    link: { type: String },
  },
  "postMessages"
);

module.exports = { PostMessage };
