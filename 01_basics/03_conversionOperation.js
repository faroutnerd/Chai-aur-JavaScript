let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

// const { score } = req.body;     // No idea what is the type of the variable score

let valueInNumber = Number(score);
console.log(typeof valueInNumber);      // It do converted the string into number but it won't print the number
console.log(valueInNumber);             // As we all know "33abc" is not a number (NaN)

let a = undefined;
let _a = Number(a);
console.log(_a);    // NaN

let b = true;
let _b = Number(b);
console.log(_b);    // 1

let c = "25";
let _c = Number(c);
console.log(_c);    // 25

let d = "Farhan";
let _d = Number(d);
console.log(_d);    // NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);             // true;

let e = "0";
let _e = Boolean(e);
console.log(_e);    // true

let f = 0;
let _f = Boolean(f);
console.log(_f);    // false

let g = "";
let _g = Boolean(g);
console.log(_g);    // false

let h = "Farhan";
let _h = Boolean(h);
console.log(_h);    // true

// 1 => true; 0 => false
// "" => false          // empty string means false
// "hitesh" => true     // non-empty string means true
// "0" => true          // non-empty string means true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);      // 33 -> It is a string.
console.log(typeof stringNumber);   // string


// 1. Examples of Implicit Conversion:

// Number to String Conversion
console.log("The number is " + 42);  // "The number is 42"
console.log(10 + "5");               // "105" (Number → String)
console.log(true + " is true");      // "true is true"
console.log("5" + 6);                // 
console.log(typeof("5" + 6));

// String to Number Conversion (when using -, *, / or %)
console.log("10" - 5);  // 5   (String → Number)
console.log("10" * 2);  // 20  (String → Number)
console.log("20" / 2);  // 10  (String → Number)
console.log("5" % 2);   // 1   (String → Number)

// Boolean to Number Conversion
console.log(true + 1);   // 2  (true → 1)
console.log(false + 5);  // 5  (false → 0)
console.log(5 * true);   // 5  (true → 1)

// null and undefined Conversion
console.log(null + 5);      // 5   (null → 0)
console.log(undefined + 5); // NaN (undefined → NaN)


// 2. Explicit Type Conversion (Type Casting)

// Convert to Number
console.log(Number("42"));       // 42
console.log(Number("3.14"));     // 3.14
console.log(Number("Hello"));    // NaN (Not a Number)
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// Using parseInt() and parseFloat()
console.log(parseInt("100px"));    // 100 (ignores non-numeric characters)
console.log(parseFloat("3.14cm")); // 3.14
console.log(parseInt("abc"));      // NaN

// Convert to String
// Use String() or .toString()
console.log(String(42));         // "42"
console.log(String(true));       // "true"
console.log(String(null));       // "null"
console.log((123).toString());   // "123"

// Convert to Boolean

// Falsy Values (Convert to false)
// 0
// "" (empty string)
// null
// undefined
// NaN

// Truthy Values (Convert to true)
// All non-zero numbers
// "Hello"
// [] (empty array)
// {} (empty object)

console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));     // false
console.log(Boolean([]));     // true (Empty array is truthy)
console.log(Boolean({}));     // true (Empty object is truthy)


// 3. Special Cases in Type Conversion

// 3.1 null and undefined
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"

// 3.2 Objects and Arrays
console.log(Number([10]));    // 10 (array with single number)
console.log(Number([1,2,3])); // NaN (multiple numbers in array)
console.log(String([1,2,3])); // "1,2,3" (array converted to string)
console.log(Boolean({}));     // true (non-empty object)
console.log(Boolean([]));     // true (empty array)

const typeConversionTable = [
    { Value: `"123"`, Number: Number("123"), String: String("123"), Boolean: Boolean("123") },
    { Value: `""`, Number: Number(""), String: String(""), Boolean: Boolean("") },
    { Value: `"abc"`, Number: Number("abc"), String: String("abc"), Boolean: Boolean("abc") },
    { Value: `true`, Number: Number(true), String: String(true), Boolean: Boolean(true) },
    { Value: `false`, Number: Number(false), String: String(false), Boolean: Boolean(false) },
    { Value: `null`, Number: Number(null), String: String(null), Boolean: Boolean(null) },
    { Value: `undefined`, Number: Number(undefined), String: String(undefined), Boolean: Boolean(undefined) },
    { Value: `{}`, Number: Number({}), String: String({}), Boolean: Boolean({}) },
    { Value: `[]`, Number: Number([]), String: String([]), Boolean: Boolean([]) },
    { Value: `[10]`, Number: Number([10]), String: String([10]), Boolean: Boolean([10]) },
    { Value: `[1,2]`, Number: Number([1, 2]), String: String([1, 2]), Boolean: Boolean([1, 2]) }
  ];
  
  console.table(typeConversionTable);
  

  // *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);    // 4
// console.log(2-2);    // 0
// console.log(2*2);    // 4
// console.log(2**3);   // 8
// console.log(2/3);    // 0.66666666..
// console.log(2%3);    // 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); "hello hitesh"

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   // 122

// console.log(1 + 2 + "2");   // 32     -> IMPORTANT

// console.log( (3 + 4) * 5 % 3);   // 2

console.log(true);  // true
console.log(+true); // 1    -> converted to number
console.log(+"");   // 0    -> converted to number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);   101

let x = 5;
console.log(++x);

let y = 10;
console.log(y++);
console.log(y);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion