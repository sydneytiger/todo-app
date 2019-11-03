const mongoose = require('mongoose');

const toDoItemSchema = mongoose.Schema({
  user: {
    firstName: String,
    lastName: String,
    userName: String
  },
  items: [{ name: String, order: Number }]
});

module.exports = mongoose.model('todo-Item', toDoItemSchema);