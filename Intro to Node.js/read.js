var fs = require("fs");  // "imports" fs module

// Synchronous Read File
// Takes in 2 parameters: name of file, encoding of file
const text = fs.readFileSync('abc.txt', 'utf8');
console.log(text);
console.log("Done reading file!!\n");

// TO RUN THIS, COMMAND LINE -> "node test.js"

// Asynchronous Read File
fs.readFile('abc.txt', 'utf8', function (err, data) {
  if(!err) {
    console.log(data);
  }
});
console.log("I am Asynchronous!");
