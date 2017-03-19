const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');

// Define routes
routes.get('/', (req, res) => res.render('index', {
  title: "Road to Node",
  header: "Welcome to Express.js!"
}));

// req.params
// http://localhost:8080/users/road2node
routes.get('/users/:id', (req, res) => {
  var id = req.params.id;
  res.render('index', {
    title: "Users",
    header: `ID = ${id}`
  });
});

// req.query
// http://localhost:8080/users?name=raph+koh
routes.get('/users', (req, res) => {
  var name = req.query.name;
  res.render('index', {
    title: "Users",
    header: `Name = ${name}`
  });
});

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

// req.body
// Use Postman
routes.post('/users', (req, res) => {
  var name  = req.body.name,
      id    = req.body.id;
  console.log(`Name: ${name}, ID: ${id}`);
  res.render('index', {
    title: "Users",
    header: `Name = ${name}<br />ID = ${id}`
  });
});

// Export routes
module.exports = routes;
