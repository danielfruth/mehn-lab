const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema(
  {
    title: String,
    url: String,
    description: String
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
