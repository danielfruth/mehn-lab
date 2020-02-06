const postsController = require('./controllers/posts');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use(methodOverride('_method'));

app.use('/posts', postsController);

app.listen(6969, () => {
  console.log('app listening on port 6969');
});
