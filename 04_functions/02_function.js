// JavaScript Scope, Hoisting, and Function Hoisting with Interview Questions

// =========================================
// 1. What is Scope?
// =========================================

// Scope defines where variables can be accessed or referenced in your code.
// There are 3 main types of scope in JavaScript:
// - Global Scope
// - Function Scope
// - Block Scope (ES6)

// =========================================
// 2. Global Scope
// =========================================

var globalVar = "I'm global";

function showGlobal() {
  console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar); // Accessible

// =========================================
// 3. Function Scope
// =========================================

function testScope() {
  var insideFunction = "Only inside";
  console.log(insideFunction); // ✅
}

testScope();
// console.log(insideFunction); // ❌ Error: not defined outside

// =========================================
// 4. Block Scope (let and const)
// =========================================

{
  let blockLet = "Block Scoped";
  const blockConst = "Also Block Scoped";
  console.log(blockLet); // ✅
  console.log(blockConst); // ✅
}

// console.log(blockLet); // ❌ Error
// console.log(blockConst); // ❌ Error

// var is NOT block scoped
{
  var notBlockScoped = "Accessible outside block";
}
console.log(notBlockScoped); // ✅

// =========================================
// 5. Scope Chain
// =========================================

// JavaScript looks outward to find a variable

let a = "Global";

function outer() {
  let b = "Outer";
  function inner() {
    let c = "Inner";
    console.log(a, b, c); // Has access to all variables above it
  }
  inner();
}

outer();

// =========================================
// 6. Lexical Scope
// =========================================

// Lexical scope means a function can access variables from its outer scope

function outerLexical() {
  let outerVar = "Outer Lexical";

  function innerLexical() {
    console.log(outerVar); // ✅
  }
  innerLexical();
}

outerLexical();

// =========================================
// 7. Variable Shadowing
// =========================================

let x = 10;

function shadow() {
  let x = 20; // Shadows global x
  console.log(x); // 20
}

shadow();
console.log(x); // 10

// =========================================
// 8. Hoisting in JavaScript
// =========================================

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope

// Example 1: Function Declaration is hoisted
console.log(hoistedFunc()); // Output: "I am hoisted!"

function hoistedFunc() {
  return "I am hoisted!";
}

// Example 2: var is hoisted but not initialized
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I exist";

// Example 3: let and const are hoisted but not initialized (temporal dead zone)
// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = "Blocked";

// =========================================
// 9. Function Hoisting in JavaScript
// =========================================

// ✅ Function Declaration is hoisted completely
sayHi(); // Works
function sayHi() {
  console.log("Hi from function declaration");
}

// ❌ Function Expression is not hoisted
// greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hi from function expression");
};

// ❌ Arrow Function is also not hoisted
// wave(); // TypeError: wave is not a function
const wave = () => {
  console.log("Hi from arrow function");
};

// Summary Table
/*
| Function Type         | Hoisted?                   | Callable Before Declaration?  |
|-----------------------|----------------------------|-------------------------------|
| Function Declaration  | ✅ Yes                     | ✅ Yes                       |
| Function Expression   | ⚠️ Partially (name only)   | ❌ No                        |
| Arrow Function        | ⚠️ Partially (name only)   | ❌ No                        |
*/

// =========================================
// 10. Interview Questions on Scope and Hoisting
// =========================================

/*
Q1. What is the difference between var, let, and const in terms of scope?
Ans: var is function-scoped, let and const are block-scoped.

Q2. What is lexical scope?
Ans: Lexical scope means inner functions have access to variables defined in outer functions.

Q3. What is scope chain?
Ans: The mechanism by which JavaScript resolves variable names by searching through parent scopes.

Q4. Can you access a variable declared inside a function from outside it?
Ans: No, unless it's returned or stored globally.

Q5. What is variable shadowing?
Ans: When a local variable has the same name as a variable in an outer scope, it 'shadows' it.

Q6. What is the difference between block scope and function scope?
Ans: Block scope is limited to {}, function scope is limited to the entire function body.

Q7. What is hoisting in JavaScript?
Ans: It's the behavior where variable and function declarations are moved to the top of their scope before code execution.

Q8. Are let and const hoisted?
Ans: Yes, but they are not initialized. Accessing them before declaration causes a ReferenceError.

Q9. Can you explain Temporal Dead Zone?
Ans: It's the time between the hoisting of let/const and their actual declaration in the code.

Q10. Are function expressions hoisted?
Ans: Only the variable name is hoisted, not the function body.
*/

// =========================================
// End of Scope, Hoisting, and Function Hoisting Revision
// =========================================
