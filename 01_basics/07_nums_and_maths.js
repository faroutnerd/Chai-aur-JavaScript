const score = 400
console.log(score); // 400

const balance = new Number(100) // explicityly defining Number
console.log(balance);   // [Number: 100]

console.log(balance.toString().length);  //digits  -> 3
console.log(balance.toFixed(2));    // 100.00

const otherNumber = 123.89665
console.log(otherNumber.toPrecision(1));    // 1e+2 -> 1 * 10²
console.log(otherNumber.toPrecision(2));    // 1.2e+2 -> 1.2 * 10²
console.log(otherNumber.toPrecision(3));    // 124
console.log(otherNumber.toPrecision(4));    // 124.9
console.log(otherNumber.toPrecision(5));    // 123.90

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000 -> US
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 -> Indian

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);  // Object [Math] {} -> its an object and having many different properties
console.log(Math.abs(-4));  // 4 -> absolute value
console.log(Math.round(4.6));   // 5 -> round-off
console.log(Math.ceil(4.2));    // 5 -> least number
console.log(Math.ceil(-4.2));    // -4 -> least number
console.log(Math.floor(4.9));   // 4 -> excluding the decimal part
console.log(Math.min(4, 3, 6, 8));  // 3 -> Minimum
console.log(Math.max(4, 3, 6, 8));  // 8 -> Maximum
console.log(Math.sqrt(25));  // 5 -> square root of 25
console.log(Math.pow(8, 3));  // 8 to the power 3 = 512

console.log(Math.random());     // always between 0 and 1
console.log((Math.random()*10) + 1);    // mutliply by 10 make it between 1 and 11
console.log(Math.floor(Math.random()*10) + 1);  // using the floor property make it between only natural number b/w 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // random value between two integer

// +++++++++++++++++++++ CHAT GPT ++++++++++++++++++++++++++++++++++++++

// Numbers in JavaScript

// 1️⃣ Declaring Numbers
let num_1 = 42;       // Integer
let num_2 = 3.14;     // Floating point number
let num_3 = 5e3;      // Exponential notation (5000)
let num_4 = 0b1010;   // Binary (10)
let num_5 = 0o52;     // Octal (42)
let num_6 = 0x2A;     // Hexadecimal (42)

// 2️⃣ Special Numeric Values
// NaN (Not-a-Number)
// NaN is returned when an invalid numeric operation is performed.
console.log(0 / 0);        // NaN
console.log("hello" * 2);  // NaN
console.log(isNaN(NaN));   // true

// Infinity and -Infinity
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.MAX_VALUE * 2); // Infinity

// 3️⃣ Number Methods

// Number Methods in JavaScript

// 1 toFixed() - Rounds a number to a fixed number of decimal places (returns a string)
let num1 = 3.14159;
console.log(num1.toFixed(2)); // "3.14" (Rounded to 2 decimal places)

// 2️ toPrecision() - Formats a number to a specified number of significant digits (returns a string)
let num2 = 123.456;
console.log(num2.toPrecision(4)); // "123.5" (Keeps 4 significant digits)

// 3️ toString() - Converts a number to a string
let num3 = 255;
console.log(num3.toString());  // "255"
console.log(num3.toString(2)); // "11111111" (Binary representation)
console.log(num3.toString(16)); // "ff" (Hexadecimal representation)

// 4️ parseInt() - Converts a string to an integer
console.log(parseInt("42"));        // 42
console.log(parseInt("42px"));      // 42 (Ignores non-numeric characters)
console.log(parseInt("1010", 2));   // 10 (Binary to decimal)

// 5️ parseFloat() - Converts a string to a floating-point number
console.log(parseFloat("3.14"));   // 3.14
console.log(parseFloat("99.99px")); // 99.99 (Ignores non-numeric characters)

// 6️ Number() - Converts a value to a number
console.log(Number("42"));       // 42
console.log(Number("3.14"));     // 3.14
console.log(Number("Hello"));    // NaN (Not a number)
console.log(Number(true));       // 1 (Boolean to number)
console.log(Number(false));      // 0

// 7️ Number.isInteger() - Checks if a value is an integer
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false

// 8️ Number.isFinite() - Checks if a value is a finite number
console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false

// 9️ Number.isNaN() - Checks if a value is NaN
console.log(Number.isNaN(NaN));    // true
console.log(Number.isNaN(42));     // false
console.log(Number.isNaN("Hello"));// false

// 10 Math Methods for Numbers

// Math.round() - Rounds to the nearest integer
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.4));  // 4

// Math.floor() - Rounds down to the nearest integer
console.log(Math.floor(4.9));  // 4

// Math.ceil() - Rounds up to the nearest integer
console.log(Math.ceil(4.1));   // 5

// Math.trunc() - Removes decimal part
console.log(Math.trunc(4.9));  // 4

// Math.pow() - Exponentiation
console.log(Math.pow(2, 3));   // 8 (2^3)

// Math.sqrt() - Square root
console.log(Math.sqrt(16));    // 4

// Math.abs() - Absolute value
console.log(Math.abs(-5));     // 5

// Math.max() - Returns the maximum value
console.log(Math.max(10, 20, 30)); // 30

// Math.min() - Returns the minimum value
console.log(Math.min(10, 20, 30)); // 10

// Math.random() - Generates a random number between 0 and 1
console.log(Math.random());  // Example: 0.3456789

// Generating a random number between a specific range (e.g., 1 to 100)
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

// ✅ BigInt (for very large numbers)
// BigInt is used for large numbers beyond Number.MAX_SAFE_INTEGER.
let bigNum = 123456789012345678901234567890n;
console.log(bigNum + 10n);  // Works
// console.log(bigNum + 10); // ❌ Error (Cannot mix BigInt and Number)


// 4️⃣ Type Conversion
// 1. String → Number
console.log(Number("42"));       // 42
console.log(parseInt("42.99"));  // 42
console.log(parseFloat("42.99"));// 42.99
console.log(+"42");              // 42 (Unary plus)

// 2. Number → String
console.log(String(42));      // "42"
console.log((42).toString()); // "42"
console.log(`${42}`);         // "42" (Template Literal)

// 7️⃣ Comparison Issues (Floating-Point Precision)
// JavaScript floating-point arithmetic can cause precision errors.
console.log(0.1 + 0.2); // 0.30000000000000004 ❌
console.log((0.1 + 0.2).toFixed(2)); // "0.30" ✅
// Solution: Use .toFixed() or multiplication before division.
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3 ✅

// +++++++++++++++++++ Interview Question ++++++++++++++++++++++++

// Q. What is the difference between toFixed() and toPrecision()?
// ✅
//  toFixed(n) fixes n decimal places.
//  toPrecision(n) keeps n significant digits.
    let num = 123.456;
    console.log(num.toFixed(2));    // "123.46" (Rounded to 2 decimal places)
    console.log(num.toPrecision(4)); // "123.5" (4 significant digits)

// Q What is the difference between isNaN() and Number.isNaN()?
// ✅
// isNaN() converts values to numbers before checking.
// Number.isNaN() checks directly without type conversion.
    console.log(isNaN("Hello"));       // true (Converted to NaN)
    console.log(Number.isNaN("Hello")); // false (Strict check)

// Q Why does 0.1 + 0.2 !== 0.3 in JavaScript?
// ✅
// JavaScript uses floating-point arithmetic, causing precision errors.
    console.log(0.1 + 0.2); // 0.30000000000000004 ❌
    console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3 ✅ (Fix using multiplication)

