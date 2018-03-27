const express = require('express');
const routes = express.Router();
const User = require('../models/User');

// Define routes
routes.get('/', (req, res) => res.send('Welcome to Road to Node!'));

// Retrieves list of users
// http://localhost:8080/users/list
routes.get('/users/list', (req, res) => 
  User.find((err, users) => res.json(users))
);

// Creates new user
// http://localhost:8080/users/create
routes.post('/users/create', (req, res) => {
  const { first, last, handle } = req.body;

  // Return error if missing parameters
  if (!first || !last || !handle) return res.status(400).send('Missing fields');

  const user = new User({ first, last, handle });

  user.save(err => {
    if (err) return res.status(400).json(err);
    res.json(user);
  });
});

// Gets user by handle
// http://localhost:8080/users/query/tomhardy
routes.get('/users/query/:handle', (req, res) => {
  const handle = req.params.handle;

  User.findOne({ handle }, (err, user) => res.json(user));
});

// Deletes user by handle
// http://localhost:8080/users/delete/tomhardy
routes.delete('/users/delete/:handle', (req, res) => {
  const handle = req.params.handle

  User.remove({ handle }, function(err) {
    if (err) return res.status(400).send(err);

    res.send(`Deleted user with handle ${handle}`);
  });
});

// Export routes
module.exports = routes;
