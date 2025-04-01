"use strict";   // treat all JS code as newer version

// alert(3+3);     // We are using NodeJS not browser

// console.log(3+3)    console.log(3+4)     // Will show an error

console.log(3+3);   console.log(3+3)

let name = "Farhan"
let age = 23
let isLoggedIn = false;

// number => 2 to the power 53\
// bigint
// string => ""
// boolean => true/false
// null => standalone value (suppose you want to state the temperature and you cannot use 0 instead you got a value null when there is no data is available to show)
// undefined => 
// symbol => unique

// object 

console.log(typeof null)        // object
console.log(typeof undefined)        // undefined

// 1. What is the difference between == and === in JavaScript?
// Answer:
// == (Loose equality) compares values after type conversion.
// === (Strict equality) compares values without type conversion.

// What are JavaScript special values like NaN and Infinity?
// Answer:
// NaN (Not-a-Number) is a special value representing an invalid number operation.
// Infinity and -Infinity represent positive and negative infinity.

console.log(0 / 0);       // NaN
console.log(10 / "abc");  // NaN
console.log(typeof NaN);  // "number"

console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity

// What is BigInt and how is it different from Number?
// Answer:
// BigInt is used to store numbers larger than 2^53 - 1 (the limit for Number type).
// It is represented by appending n to a number.

let bigNum = 123456789012345678901234567890n;
console.log(bigNum + 10n);  // 123456789012345678901234567900n
// 10n - convert the number into BigInt

let num = 42;
console.log(bigNum + BigInt(num)); // ✅ Works
console.log(bigNum + num); // ❌ TypeError (cannot mix BigInt and Number)

// --
let person = { name: "John", age: 30 };
console.log(person.name);  // "John"

let numbers = [10, 20, 30];
console.log(numbers[1]);   // 20

// How can we check if a variable is an array?
// Answer:
// Use Array.isArray() method.

let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true

let obj = { a: 1, b: 2 };
console.log(Array.isArray(obj)); // false

// Can objects be compared in JavaScript?
// Answer:
// Objects are compared by reference, not by value.

let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 === obj2); // false (different references)

let obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)

console.log("5" - 2);       // 3    // "5" is converted to number → 5 - 2 = 3
console.log("5" + 2);       // "52" // "5" is concatenated with "2"
console.log("5" * 2);       // 10   // "5" is converted to number → 5 * 2 = 10
console.log(true + true);   // 2    // true is treated as 1 → 1 + 1 = 2
console.log([] + []);       // ""  // Empty array is converted to an empty string
console.log({} + {});       // "[object Object][object Object]" // Objects are converted to strings

// Q. Why does console.log([] + []) return an empty string?
// Answer:
// When using +, JavaScript converts both arrays to strings.
// An empty array converts to an empty string "".
// So, [] + [] results in "".
// console.log([] + []);  // ""
// console.log([1,2] + [3,4]); // "1,23,4"

// Q. What happens when adding a number and an array?
// Answer:
// JavaScript converts the array to a string and then applies string concatenation.
console.log(5 + []);  // "5" (Array → String)
console.log(5 + [1,2]); // "51,2"

// Q. Why does console.log([] == false) return true?
// Answer:
// == triggers type coercion.
// Boolean([]) is true, but [] is converted to a string "", which is falsy.
// So "" == false becomes true.

console.log([] == false);  // true
console.log([] == 0);      // true (as 0 === false AND (false == false) will be true )
console.log([1] == true);  // true (1 == true)
console.log([2] == true);  // false (2 != true)

// How does JavaScript convert objects to primitive values?
// Answer:
// JavaScript calls valueOf() or toString() when converting objects.

let obj11 = { valueOf() { return 42; } };
console.log(obj11 + 5); // 47