const express = require('express');
const router = express.Router();

const Messages = require('./Messages');

router.get('/', (req, res) => {
  Messages.find()
    .sort({time: 1})
    .then(messages => {res.json(messages)})
})

router.post('/', (req, res) => {
  const newMessage = new Messages({
    value: req.body.value,
    user: req.body.user,
    type: req.body.type,
    time: req.body.time
  });

  newMessage.save().then(message => res.json(message));
})

module.exports = router ;