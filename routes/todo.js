const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      helpers = require('../helpers/todo');
      db = require('../models');

// get all todos
router.route('/')
  .get(helpers.getAllTodos)
  .post(helpers.addTodo)

// show one
router.route('/:id')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;
