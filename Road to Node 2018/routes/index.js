const express = require('express');
const routes = express.Router();
const User = require('../models/User');

// Define routes
routes.get('/', (req, res) => res.send('Welcome to Road to Node!'));

// Get a list of users  (GET)
// http://localhost:8080/users/list
// User.find((err, users) => res.json(users))


// Create new user (POST)
// http://localhost:8080/users/create
// Uses 'first', 'last', 'handle' in req.body
// const user = new User({ first, last, handle });
// user.save(err => {});


// Gets user by handle (GET)
// http://localhost:8080/users/query/tomhardy
// /:handle
// User.findOne({ handle }, (err, user) => {});


// Deletes user by handle (DELETE)
// http://localhost:8080/users/delete/tomhardy
// User.remove({ handle }, err => { });

// Export routes
module.exports = routes;
