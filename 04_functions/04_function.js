// Immediate Invoked Function Expression (IIFE)

// global scope se hume pollution nahi chahiye toh IIFE ka use krenge
(function() {
    console.log("IIFE ran!");
})();

// ()()  // (function definitio)(function execution call)

(function chai(){
    // named IIFE
    console.log("DB CONNECTED!");
})()

// ERROR: TypeError: (intermediate value)(...) is not a function

(function aurcode(){
    console.log("DB DISCONNECTED!");
})()

// The second funtion 'aurcode' will show an error because the first function 'chai' is invoked and not closed yet.
// So, we need to close the first function 'chai' before invoking the second function 'aurcode' using a semicolon ';'.

( () => {
    console.log("Arrow function IIFE ran!");
} )();

((name)=>{
    console.log(`Hello ${name}`);   // Hello Farhan
})('Farhan');