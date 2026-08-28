const express = require('express');
const messageRoutes = require('./routes/messageRoutes.js');

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
app.get('/', (req, res) => {
  res.redirect('/messages');
});

// message routes
app.use('/messages', messageRoutes);
