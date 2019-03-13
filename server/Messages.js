const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessagesSchema = new Schema({
  value: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = Messages = mongoose.model('Messages', MessagesSchema);