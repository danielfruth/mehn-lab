const express = require('express');
const Post = require('../models/schema');
const router = express.Router();

// shows all posts //
router.get('/', (req, res) => {
  Post.find({})
    .then(posts => {
      res.render('show', { posts });
    })
    .catch(console.error);
});

// post new //
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

// delete //
router.delete('/:id', (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect('/posts');
  });
});

// edit function //
router.get('/:id/edit', (req, res) => {
  Post.findById(req.params.id).then(post => {
    res.render('edit', post);
  });
});

router.put('/:id', (req, res) => {
  const post = {
    description: req.body.description
  };
  Post.findOneAndUpdate(
    {
      _id: req.params.id
    },
    post,
    { new: true }
  ).then(post => {
    res.redirect('/posts');
  });
});

module.exports = router;
