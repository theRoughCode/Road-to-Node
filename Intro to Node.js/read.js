var fs = require("fs");  // "imports" fs module

// Synchronous Read File
// Takes in 2 parameters: name of file, encoding of file
const text = fs.readFileSync('abc.txt', 'utf8');
console.log(text);
console.log("I am Synchronous!");

// TO RUN THIS, COMMAND LINE -> "node test.js"

// Asynchronous Read File
fs.readFile('abc.txt', 'utf8', function (err, data) {
  if(!err) {
    console.log(data);
  }
});
console.log("I am Asynchronous!");

// Using a Promise
// NOTE THAT PARAMS FOR PROMISE IS (fulfilled, rejected), REVERSE OF CALLBACKS
function readFileAsync(file, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, encoding, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    })
  })
}

readFileAsync('abc.txt', 'utf-8').then(data => console.log(data), err => console.error(err));


console.log("I am also Asynchronous!");
