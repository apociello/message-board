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

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => res.render('index', { messages: messages }));

app.get('/new', (req, res) => res.render('form'));

app.post('/new', (req, res) => {
const { messageUser, messageText } = req.body;
  messages.push({ user: messageUser, text: messageText, added: new Date() });
  res.redirect('/');
});
