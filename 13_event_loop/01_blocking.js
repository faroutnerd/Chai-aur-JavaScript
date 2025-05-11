const fs = require('fs');

// Async -> Blocking
console.log(1);
const result = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(result);

console.log(2);

// Default thread pool size: 4
// can be increased depending upon the number of CPU cores 
// of the machine
// if it is 8 core then it can increased up to 8
