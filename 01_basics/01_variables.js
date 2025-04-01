/*
Prefer not to use var
because of issue in block scope and functional scope
*/

const accountId = 144553
let accountEmail = "farhan@gmail.com"   // scope variable don't have any effect outside the scope.
var accountPassword = "12345"       // scope variable ouside gets changed
accountCity = "Kolkata"     // Avoid using such kind of variable declaration
/*
if you do like this then it will create a global variable and won't show any error
but if you use the same in strict mode it will show an error accountCity is not defined
*/
let accountState;   // undefined

// accountId = 14   NOT ALLOWED as it is a constant
accountEmail = "gitfarhan@gmail.com"   // Allowed
accountPassword = 12121    // Allowed
accountCity = "Bengaluru"    //Allowed

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Hoisting in Javascript
console.log(x); // Undefined (var is hoisted)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

{
    let x = 10;
}
  console.log(x);   // ReferenceError: x is not defined


/*
Basic Questions
1. What are the different ways to declare variables in JavaScript?
 -> var a = 10;   // Function-scoped, can be redeclared and updated
    let b = 20;   // Block-scoped, cannot be redeclared but can be updated
    const c = 30; // Block-scoped, cannot be redeclared or updated

2. What is the difference between var, let, and const?

3. What happens if you declare a variable without var, let, or const?

4. Can you redeclare a variable using var, let, and const?
 -> var can be redeclared.
    let and const cannot be redeclared.

5. What is hoisting, and how does it affect variables?
 -> The Temporal Dead Zone (TDZ) is the time between variable declaration and initialization 
    where accessing the variable causes a ReferenceError.

6. What is the scope of var, let, and const in JavaScript?

Intermediate Questions;
7. What is a temporal dead zone (TDZ) in JavaScript?
8. What happens when you try to modify a const variable?
9. Is JavaScript statically or dynamically typed? How does it relate to variables?
10. What are global and local variables in JavaScript?
11. How does var behave inside a function?
12. What is the difference between function scope and block scope?
13. How do JavaScript closures affect variable accessibility?
14. What happens when you try to access a variable before it is declared?

Advanced Questions:
15. Can you declare a variable without assigning a value? What happens?
16. What are the differences between undefined, null, and not defined?
17. What are shadowing and variable masking in JavaScript?
18. How does JavaScript handle variable memory allocation?
19. What is destructuring, and how does it work with variables?
20. How do let and const help in writing better asynchronous code?
*/