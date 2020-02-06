const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/slacker-news', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
