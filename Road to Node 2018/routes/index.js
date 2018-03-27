const express = require('express');
const routes = express.Router();
const User = require('../models/User');

// Define routes
routes.get('/', (req, res) => res.send('Welcome to Road to Node!'));

// Export routes
module.exports = routes;
