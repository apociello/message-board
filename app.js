const express = require('express');

// initial data
const messages = [
  {
    user: 'Max',
    text: 'Hi there!',
    added: new Date(),
  },
  {
    user: 'Charles',
    text: 'Hello World!',
    added: new Date(),
  },
];

// express app
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// register view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.render('index', { messages: messages }));
