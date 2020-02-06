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

router.get('/submit', (req, res) => {
  res.render('submit');
});

router.post('/', (req, res) => {
  Post.create(req.body)
    .then(newPost => {
      res.redirect('/posts');
    })
    .catch(console.error);
});

module.exports = router;
