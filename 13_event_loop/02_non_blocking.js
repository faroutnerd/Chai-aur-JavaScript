const fs = require('fs');

// Non-blocking
console.log(1);
fs.readFile('./contacts.txt', 'utf-8', (error, response) => {
    console.log(response);
});

console.log(2);
