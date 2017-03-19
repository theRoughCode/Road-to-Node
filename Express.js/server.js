const express = require('express');
const app = express();
const routes = require('./routes'); // Import routes module we created
const path = require('path');   // import path module
const exphbs = require('express-handlebars');  // Import handlebars module

// Set up paths
app.set('views', path.join(__dirname, 'views'));

// Set template engine
app.engine('hbs', exphbs());  // define engine
app.set('view engine', 'hbs');  // set engine


// Define port to listen to
const PORT = 8080;

// Connect all routes from routes module to app
app.use('/', routes);

// Start Server
app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));
