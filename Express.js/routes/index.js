const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

// Define routes
routes.get('/', (req, res) => res.render('index', {
  title: "Road to Node",
  header: "Welcome to Express.js!",
  is_form: true,
  field: ["name", "id", "username"]
}));

// req.params
// http://localhost:8080/users/road2node/191
routes.get('/users/:username/:id', (req, res) => {
  var username  = req.params.username,
      id        = req.params.id;
  res.render('index', {
    title: "Users",
    header: `Hi there, ${username}!`,
    id: id
  });
});

// req.query
// http://localhost:8080/users?username=road2node&name=raph+koh
routes.get('/users', (req, res) => {
  var username = req.query.username;
  var name = req.query.name;
  res.render('index', {
    title: "Users",
    header: `Welcome ${username}!`,
    name: name
  });
});

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

// req.body
// Use Postman
routes.post('/users', (req, res) => {
  var username  = req.body.username,
      name      = req.body.name,
      id        = req.body.id;
  console.log(`Name: ${name}, ID: ${id}`);
  res.render('index', {
    title: "Users",
    header: `Hello ${username}!`,
    name: name,
    id: id
  });
});

// Export routes
module.exports = routes;
