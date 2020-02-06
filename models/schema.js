const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String
  // date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
