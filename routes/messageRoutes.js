const express = require('express');
const {
  message_index,
  message_new_get,
  message_new_post,
} = require('../controllers/messageController.js');

const router = express.Router();

router.get('/', message_index);

router.get('/new', message_new_get);

router.post('/new', message_new_post);

module.exports = router;
