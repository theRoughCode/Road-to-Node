// Import the HTTP module
var http = require('http');

// Define the port to listen to
const PORT = 8080;

// Function that handles requests and sends reponses
function handleRequest(req, res) {
  const html =
  `<html>
    <head>
      <title>Our First Server!</title>
    </head>
    <body>
      <h1>Welcome to our first server!</h1>
      <p>Success! Path Hit: ${req.url}</p>
    </body>
   </html>`;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(html);
  res.end();
}

// Create Server
var server = http.createServer(handleRequest);

// Start Server
server.listen(PORT, function() {
  // This is a CALLBACK that is triggered when server is successfully listening
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
