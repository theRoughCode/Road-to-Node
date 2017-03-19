// import express module
const express = require('express');
// top-level function exported by express module
var app = express();

// Define port for server to listen on
const PORT = 8080;

// Define endpoints
app.get('/', (req, res) => res.send('Hello World!'));

// Start server
app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));

// TO RUN THE SERVER -> `npm start` or `node server.js`
