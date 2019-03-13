const express = require('express');
const router = express.Router();

const Messages = require('./Messages')

router.get('/', (req, res) => {
  Messages.find()
    .sort({date: 1})
    .then(messages => {res.json(messages)})
})

router.post('/', (req, res) => {
  const newMessage = new Messages({
    value: req.body.text,
    user: req.body.user
  });

  newMessage.save().then(message => res.json(message));
})

module.exports = router ;