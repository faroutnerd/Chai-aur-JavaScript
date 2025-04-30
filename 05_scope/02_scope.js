// JavaScript Scope Complete Revision with Interview Questions

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
// 8. Interview Questions on Scope
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
*/

// =========================================
// End of Scope Revision
// =========================================

// ==========================================
// IMPORTANT -> var is a function-scoped variable
// IMPORTANT -> let and const are block-scoped variables
// ==========================================
function School(){
    var name = "Farhan";
    console.log(name); // Farhan
    console.log(this.name); // undefined
}

School();   // Farhan

// console.log(name); // ReferenceError: name is not defined