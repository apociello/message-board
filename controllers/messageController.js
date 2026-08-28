// initial data
const messages = [
  {
    user: 'Nick',
    text: 'hey, the server is up and running',
    added: new Date(),
  },
  {
    user: 'Andrew',
    text: 'great, we can start talking now',
    added: new Date(),
  },
];

const message_index = (req, res) =>
  res.render('index', { messages: messages, title: 'messages' });

const message_new_get = (req, res) =>
  res.render('form', { title: 'new message' });

const message_new_post = (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({ user: messageUser, text: messageText, added: new Date() });
  res.redirect('/messages');
};

module.exports = {
  message_index,
  message_new_get,
  message_new_post,
};
