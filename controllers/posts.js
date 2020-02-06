const express = require('express');
const Post = require('../models/schema');
const router = express.Router();

router.get('/', (req, res) => {
  Post.find({})
    .then(posts => {
      res.render('show', { posts });
    })
    .catch(console.error);
});

module.exports = router;
