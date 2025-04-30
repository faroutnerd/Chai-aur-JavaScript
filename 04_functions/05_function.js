// JavaScript Functions Complete Revision with Interview Questions

// =========================================
// 1. What is a Function?
// =========================================

// A function is a reusable block of code that performs a specific task.
// It improves modularity and code reusability.

// =========================================
// 2. Function Declaration (Named Function)
// =========================================

function greet() {
    console.log("Hello World!");
  }
  
  greet(); // Output: Hello World!
  
  // =========================================
  // 3. Function Expression (Anonymous Function)
  // =========================================
  
  const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(2, 3)); // Output: 5
  
  // =========================================
  // 4. Arrow Function (ES6)
  // =========================================
  
  const multiply = (x, y) => {
    return x * y;
  };
  
  console.log(multiply(4, 5)); // Output: 20
  
  // If only one line and one return, we can shorten:
  const square = (n) => n * n;
  console.log(square(6)); // Output: 36
  
  // =========================================
  // 5. Parameters vs Arguments
  // =========================================
  
  // Parameters are variables listed inside the function definition.
  // Arguments are the actual values passed to the function.
  
  function sayHello(name) { // name is a parameter
    console.log(`Hello, ${name}`);
  }
  
  sayHello("Alice"); // "Alice" is an argument
  
  // =========================================
  // 6. Default Parameters
  // =========================================
  
  function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}`);
  }
  
  greetUser(); // Output: Welcome, Guest
  
  greetUser("John"); // Output: Welcome, John
  
  // =========================================
  // 7. Rest Parameters (...args)
  // =========================================
  
  function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);  // numbers.reduce() is used to sum all elements in the array
  }
  
  console.log(sumAll(1, 2, 3, 4)); // Output: 10
  
  // =========================================
  // 8. Return Statement
  // =========================================
  
  function subtract(a, b) {
    return a - b;
    console.log("This won't run after return");
  }
  
  console.log(subtract(10, 4)); // Output: 6
  
  // =========================================
  // 9. Function Hoisting
  // =========================================
  
  // Function declarations are hoisted to the top of their scope.
  console.log(hoistedFunction()); // Output: I am hoisted!
  
  function hoistedFunction() {
    return "I am hoisted!";
  }
  
  // Function expressions and arrow functions are NOT hoisted.
  
  // =========================================
  // 10. Anonymous Function
  // =========================================
  
  const anon = function() {
    console.log("I am an anonymous function!");
  };
  
  anon();
  
  // =========================================
  // 11. Callback Functions
  // =========================================
  
  // A function passed as an argument to another function
  
  function processUserInput(callback) {
    const name = "Bob";
    callback(name);
  }
  
  processUserInput(function(name) {
    console.log(`Hello, ${name}`);
  }); // Output: Hello, Bob
  
  // =========================================
  // 12. IIFE (Immediately Invoked Function Expression)
  // =========================================
  
  (function() {
    console.log("IIFE ran!");
  })();
  
  // =========================================
  // 13. Arrow Functions vs Normal Functions
  // =========================================
  
  // - Arrow functions do NOT have their own 'this'.
  // - Useful for shorter syntax and inside callbacks.
  
  // =========================================
  // 14. Interview Questions and Answers
  // =========================================
  
  /*
  Q1. What is the difference between function declaration and expression?
  Ans: Declaration is hoisted, expression is not.
  
  Q2. What is a callback function?
  Ans: A function passed as an argument to another function.
  
  Q3. What is the difference between parameters and arguments?
  Ans: Parameters are placeholders; arguments are actual values passed.
  
  Q4. What is an IIFE?
  Ans: A function that runs immediately after being defined.
  
  Q5. What is the difference between normal function and arrow function?
  Ans: Arrow functions do not have their own 'this' context.
  
  Q6. Can you return multiple values from a function?
  Ans: Yes, by returning an array or an object.
  
  Q7. What is function hoisting?
  Ans: Moving function declarations to the top of the scope before execution.
  */
  
  // =========================================
  // End of Functions Revision
  // =========================================
  