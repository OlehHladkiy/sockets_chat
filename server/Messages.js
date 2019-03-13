const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessagesSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  },
});

module.exports = Messages = mongoose.model('Messages', MessagesSchema);