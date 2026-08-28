// initial data
let next_message_Id = 2;
const messages = [
  {
    user: 'Nick',
    text: 'hey, the server is up and running',
    added: new Date(),
    message_id: 0,
  },
  {
    user: 'Andrew',
    text: 'great, we can start talking now',
    added: new Date(),
    message_id: 1,
  },
];

const message_index = (req, res) => {
  res.render('index', { messages: messages, title: 'messages' });
};

const message_details = (req, res) => {
  const id = Number(req.params.id);
  const message = messages.find((m) => m.message_id === id);

  res.render('details', { title: 'details', message: message });
};

const message_new_get = (req, res) => {
  res.render('form', { title: 'new message' });
};

const message_new_post = (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    user: messageUser,
    text: messageText,
    added: new Date(),
    message_id: next_message_Id++,
  });
  res.redirect('/messages');
};

module.exports = {
  message_index,
  message_details,
  message_new_get,
  message_new_post,
};
