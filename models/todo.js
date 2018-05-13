const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: {type: String, required: "Must provide name"},
  completed: {type: Boolean, default: false},
  created_on: {type: Date, default: Date.now}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
