const db = require("../models");

exports.getAllTodos = (req, res) => {
  db.Todo.find()
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.send(err);
  });
};

exports.addTodo = (req, res) => {
  db.Todo.create(req.body)
  .then((data) => {
    res.status(201).json(data);
  })
  .catch((err) => {
    res.send(err);
  });
}

exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.id)
  .then((foundToDo)=>{
    res.json(foundToDo);
  })
  .catch((err)=>{
    res.send(err);
  });
}

exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((foundToDo)=>{
    res.json(foundToDo);
  })
  .catch((err)=>{
    res.send(err);
  });
};

exports.deleteTodo = (req, res) => {
  db.Todo.findByIdAndRemove(req.params.id)
  .then(()=>{
    res.json({message: "We deleted it!"});
  })
  .catch((err)=>{
    res.send(err);
  });
}
