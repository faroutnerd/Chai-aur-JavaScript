const name = "farhan"
const repoCount = 20

// console.log(name + repoCount + " Value");    // Don't use this -> Outdated

console.log(`Hello my name ${name} and my repoCount is ${repoCount}.`);

const gameName = new String('Farhan');
console.log(gameName);  // [String: 'Farhan']

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);       // 6
console.log(gameName.toUpperCase()) //FARHAN
console.log(gameName.toLowerCase()) //farhan
console.log(gameName.charAt(5))     // n
console.log(gameName.indexOf('a')); // the index of first 'a'
console.log(gameName.lastIndexOf('a')); // give the last index of 'a'

const newString = gameName.substring(0, 4); //Farh -> last range is excluded
console.log(newString)

const anotherString = gameName.slice(-6, 4); //Farh -> -8 se 3rd index
console.log(anotherString);

const newStringOne = "   farhan    ";
console.log(newStringOne)   //    farhan    
console.log(newStringOne.trim());   //farhan

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar')) // false

const str = 'farhan-akhtar'
console.log(str.split('-'));    // [ 'farhan', 'akhtar' ]

// ----------------------CHAT-GPT---------------------------------------------------------------

// A string in JavaScript is a sequence of characters enclosed in single ('), double ("),
//  or backticks (``) quotes. Strings are immutable, meaning they cannot be changed after creation.

// 1. Creating Strings
let str1 = "Hello, World!";   // Double quotes
let str2 = 'JavaScript is fun';  // Single quotes
let str3 = `Template String`; // Backticks (Template literals)

// 2. String Properties
let name_ = "Alice";
let message_ = `Hello, ${name_}! Welcome to JavaScript.`;
console.log(message_);  // Output: Hello, Alice! Welcome to JavaScript.

// 3. Common String Methods
let text = "JavaScript";
console.log(text.length); // 10

// i. charAt(index) → Returns character at the given index
let a = "Hello";
console.log(a.charAt(1)); // "e"
console.log(a.charAt(4)); // "o"
console.log(a.charAt(10)); // "" (empty string if index is out of range)

// ii. charCodeAt(index) → Returns ASCII code of the character at the given index
let b = "ABC";
console.log(b.charCodeAt(0)); // 65 (ASCII value of 'A')

// iii. indexOf(substring) → Finds the first occurrence of a substring
let c = "Hello, world!";
console.log(c.indexOf("o")); // 4
console.log(c.indexOf("world")); // 7
console.log(c.indexOf("JavaScript")); // -1 (not found)

// iv. lastIndexOf(substring) → Finds the last occurrence of a substring
let d = "Hello, world!";
console.log(d.lastIndexOf("o")); // 8
console.log(d.lastIndexOf("Hello")); // 0
console.log(d.lastIndexOf("JavaScript")); // -1 (not found)

// v. toUpperCase() → Converts string to uppercase
let e = "hello";
console.log(e.toUpperCase()); // "HELLO"

// vi. toLowerCase() → Converts string to lowercase
let f = "HELLO";
console.log(f.toLowerCase()); // "hello"

// vii. trim() → Removes whitespace from both sides
let g = "   JavaScript   ";
console.log(g.trim()); // "JavaScript"

// viii. trimStart() & trimEnd() → Removes whitespace from start or end
let h = "   JavaScript   ";
console.log(h.trimStart()); // "JavaScript   "
console.log(h.trimEnd());   // "   JavaScript"

// ix. slice(start, end) → Extracts part of a string
let i = "JavaScript";
console.log(i.slice(0, 4)); // "Java"
console.log(i.slice(-6)); // "Script" (negative index counts from end)

// x.  substring(start, end) → Similar to slice(), but does not support negative indexes
let j = "JavaScript";
console.log(j.substring(0, 4)); // "Java"
console.log(j.substring(4, 10)); // "Script"
console.log(j.substring(4, 2)); // "va" (swaps values if start > end)

// xi. replace(oldValue, newValue) → Replaces first occurrenc
let k = "Hello World";
console.log(k.replace("World", "JavaScript")); // "Hello JavaScript"
console.log(k.replace("o", "O")); // "HellO World" (only first 'o' is replaced)

// -> To replace all occurrences, use /g (global flag) in regex:
let l = "Hello Hello";
console.log(l.replace(/Hello/g, "Hi")); // "Hi Hi"

// xii. replaceAll(oldValue, newValue) → Replaces all occurrences (ES2021+)
let m = "Hello Hello";
console.log(m.replaceAll("Hello", "Hi")); // "Hi Hi"

// xiii. split(separator) → Splits string into an array
let n = "apple,banana,orange";
console.log(n.split(",")); // ["apple", "banana", "orange"]
console.log("Hello".split("")); // ["H", "e", "l", "l", "o"]
console.log("One Two Three".split(" ")); // ["One", "Two", "Three"]

// xiv. concat() → Combines multiple strings
let str1_ = "Hello";
let str2_ = "World";
console.log(str1_.concat(", ", str2_, "!")); // "Hello, World!"

// xv. includes(substring) → Checks if string contains a substring
let o = "JavaScript is fun";
console.log(o.includes("fun")); // true
console.log(o.includes("Python")); // false

// xvi. startsWith(substring) → Checks if string starts with a substring
let p = "Hello, JavaScript!";
console.log(p.startsWith("Hello")); // true
console.log(p.startsWith("Java")); // false

// xvii. endsWith(substring) → Checks if string ends with a substring
let q = "Hello, JavaScript!";
console.log(q.endsWith("!")); // true
console.log(q.endsWith("JavaScript")); // false

// xviii. repeat(count) → Repeats string count times
let r = "Hello ";
console.log(r.repeat(3)); // "Hello Hello Hello "

// xix. match(regex) → Finds matches using a regex pattern
let s = "The quick brown fox jumps over the lazy dog";
console.log(s.match(/o/g)); // ["o", "o", "o", "o"]
console.log(s.match(/quick/)); // ["quick"]

// xx. padStart(length, char) & padEnd(length, char) → Pads string to a certain length
let t = "42";
console.log(t.padStart(5, "0")); // "00042"
console.log(t.padEnd(5, "0")); // "42000"


// 4. String Concatenation
// i. Using + Operator
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// ii. Using concat()
let str_1 = "Hello";
let str_2 = "World";
console.log(str_1.concat(", ", str_2)); // "Hello, World"

// iii. Using Template Literals
let _name = "Alice";
console.log(`Hello, ${_name}!`); // "Hello, Alice!"

// 5. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");    // -> array -> reversed -> joined back to string
}

console.log(reverseString("JavaScript")); // "tpircSavaJ"


// Interview Questions on Strings----------------------------------
// Q. What are the different ways to declare a string in JavaScript?

// Q. What is the difference between .slice(), .substring(), and .substr()?

// Q. What is string interpolation in JavaScript?
// -> String interpolation is a way to insert variables or expressions inside a string using template literals ( ).

// Q. Are strings mutable in JavaScript? Explain with an example.
// -> No, strings are immutable in JavaScript. This means that once a string is created, its characters cannot be changed directly.

// Q. How can you check if a string contains a particular substring?
    let sentence = "JavaScript is awesome!";

    // Using includes()
    console.log(sentence.includes("awesome")); // true

    // Using indexOf()
    console.log(sentence.indexOf("JavaScript")); // 0 (Found at index 0)
    console.log(sentence.indexOf("Python")); // -1 (Not found)

    // Using search()
    console.log(sentence.search("is")); // 11 (Found at index 11)


// Q. How do you convert a number to a string?
    let num = 42;

    // Using toString()
    console.log(num.toString()); // "42"

    // Using String()
    console.log(String(num)); // "42"

    // Using Template literals
    console.log(`${num}`); // "42"


// Q. How can you reverse a string in JavaScript?
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log(reverseString("hello")); // "olleh"

    
