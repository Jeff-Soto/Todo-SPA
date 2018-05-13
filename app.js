const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      todoRoutes = require('./routes/todo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
