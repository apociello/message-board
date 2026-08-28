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

const router = express.Router();

router.get('/', (req, res) =>
  res.render('index', { messages: messages, title: 'messages' }),
);

router.get('/new', (req, res) => res.render('form', { title: 'new message' }));

router.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ user: messageUser, text: messageText, added: new Date() });
  res.redirect('/');
});

module.exports = router;
