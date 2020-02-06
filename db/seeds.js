const Post = require('../models/schema');
const seedData = require('./seed.json');

Post.remove({})
  .then(() => Post.collection.insert(seedData))
  .then(() => {
    process.exit();
  });
