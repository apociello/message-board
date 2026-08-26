const express = require('express');

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

app.get('/', (req, res) => res.render('index'));
