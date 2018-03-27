const express = require('express');
const app = express();
const routes = require('./routes'); // Import routes module we created
const path = require('path');   // Import path module
const bodyParser = require('body-parser');
const mongoose = require('mongoose');  // Middleware for MongoDB (database)
const cors = require('cors');

// Define port to listen to
const PORT = 8080;

// allows us to parse bodies of requests
app.use(bodyParser.json());
// allows for rich objects and arrays to be encoded into URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

// Allows other websites to fetch our data
app.use(cors({ origin: '*' }));

// Connect all routes from routes module to app
app.use('/', routes);

// Connects to the test database on locally running instance of MongoDB
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to database!'));

// Start Server
app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));
