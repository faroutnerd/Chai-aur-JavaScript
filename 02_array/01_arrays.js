// javaScript ke arrays resizable hotein hain

// Shallow Copy vs. Deep Copy in JavaScript 🚀
// When working with objects and arrays in JavaScript, copying them can be tricky. There are two types of copies:

// 1️⃣ Shallow Copy – Copies only the first level, nested objects/arrays are referenced.
// 2️⃣ Deep Copy – Creates a completely independent copy, including nested objects/arrays.

// 🌟SHALLLOW COPY🌟:
// A shallow copy means that only the top-level properties are copied, 
// while nested objects and arrays remain referenced. 
// If you modify a nested object in the copied structure, 
// it will reflect in the original object.

// 📌 Example: Shallow Copy
let original = {
    name: "John",
    age: 30,
    address: { city: "New York", zip: 10001 }
};

// 🔹 Shallow copy using spread operator
// -> jb hum nested object me changes karenge tab hi original object me changes aayenge yehi shallow copy hota hai
let shallowCopy = { ...original };
shallowCopy.name = "Mike";  // ✅ Changes only in shallowCopy
shallowCopy.address.city = "Los Angeles";  // ❌ Changes in both shallowCopy and original
console.log(original);
// { name: "John", age: 30, address: { city: "Los Angeles", zip: 10001 } }
console.log(shallowCopy);
// { name: "Mike", age: 30, address: { city: "Los Angeles", zip: 10001 } }

// ✅ Common Ways to Create a Shallow Copy
// 1. Using spread operator
let obj1 = { ...original };

// 2. Using Object.assign()
let obj2 = Object.assign({}, original);

// 3. Using slice() for arrays
let arr__1 = [1, 2, 3];
let shallowArray = arr__1.slice();


// 🌟Deep Copy (Independent Copy)🌟:
// A deep copy creates a completely new object, 
// including all nested objects and arrays, 
// making them fully independent of the original object.

// fark nahi penda ki hum nested me ya bahar wale me changes laa rahe hain original me koi changes nahi aayenge

// 📌 Example: Deep Copy
let original_ = {
    name: "John",
    age: 30,
    address: { city: "New York", zip: 10001 }
};

// ✅ Deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(original_));
deepCopy.name = "Mike";  // ✅ Changes only in deepCopy
deepCopy.address.city = "Los Angeles";  // ✅ Changes only in deepCopy

console.log(original);
// { name: "John", age: 30, address: { city: "New York", zip: 10001 } }

console.log(deepCopy);
// { name: "Mike", age: 30, address: { city: "Los Angeles", zip: 10001 } }

// ✅ Common Ways to Create a Deep Copy
// 🔸 1. Using JSON Methods (Fastest, But Limited)
let deepCopy = JSON.parse(JSON.stringify(original));



//ARRAY -----------------------------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  // 1

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// +++++++++++++++++++++CHAT GPT+++++++++++++++++++++++++
// 1️⃣ Creating an Array
// ✅ Using array literals (Recommended)
let fruits = ["Apple", "Banana", "Mango"];

// ✅ Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// ✅ Creating an empty array
let emptyArray = [];

// ✅ Mixed data types
let mixedArray = ["Hello", 42, true, { name: "John" }];

// 2️⃣ Accessing Array Elements
console.log(fruits[0]);  // "Apple"
console.log(fruits[1]);  // "Banana"
console.log(fruits[2]);  // "Mango"
console.log(fruits.length);  // 3 (Total number of elements)

// 3️⃣ Modifying Arrays
fruits[1] = "Orange";  // Replacing "Banana" with "Orange"
console.log(fruits);  // ["Apple", "Orange", "Mango"]

fruits.push("Grapes");  // Adding an element at the end
console.log(fruits);  // ["Apple", "Orange", "Mango", "Grapes"]

fruits.pop();  // Removes last element
console.log(fruits);  // ["Apple", "Orange", "Mango"]

// 4️⃣ Common Array Methods
// 📌 Adding & Removing Elements
let arr = [1, 2, 3, 4];

// Push (Add at the end)
arr.push(5);
console.log(arr);  // [1, 2, 3, 4, 5]

// Pop (Remove from the end)
arr.pop();
console.log(arr);  // [1, 2, 3, 4]

// Unshift (Add at the beginning)
arr.unshift(0);
console.log(arr);  // [0, 1, 2, 3, 4]

// Shift (Remove from the beginning)
arr.shift();
console.log(arr);  // [1, 2, 3, 4]


// 📌 Splicing and Slicing
let animals = ["Lion", "Tiger", "Elephant", "Giraffe"];

// Splice (Modifies original array)
animals.splice(1, 2, "Panda", "Bear");  // Removes 2 elements from index 1, adds 2 new elements
console.log(animals);  // ["Lion", "Panda", "Bear", "Giraffe"]

// Slice (Returns a new array)
let newAnimals = animals.slice(1, 3);  // Extracts elements from index 1 to 2
console.log(newAnimals);  // ["Panda", "Bear"]
console.log(animals);  // Original array remains unchanged

// One more example of splice
let z = [1,2,3,4,5];
let y = z.splice(1, 3);
console.log(z); // [ 1, 5 ]
console.log(y); // [ 2, 3, 4 ]


// 📌 Searching in Arrays
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors.indexOf("Blue"));  // 2 (Index of "Blue")
console.log(colors.includes("Green"));  // true (Checks if "Green" exists)
console.log(colors.lastIndexOf("Yellow"));  // 3 (Last occurrence index)

// 📌 Looping Through Arrays
let numbers_ = [10, 20, 30, 40];
// For loop
for (let i = 0; i < numbers_.length; i++) {
    console.log(numbers_[i]);
}
// ForEach loop
numbers.forEach((num) => console.log(num * 2));  // Doubles each element    2 4 6 8 10


// 📌 Transforming Arrays
let nums = [1, 2, 3, 4, 5];

// Map (Creates a new array)
let squared = nums.map(num => num ** 2);
console.log(squared);  // [1, 4, 9, 16, 25]

// Filter (Filters elements based on a condition)
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// Reduce (Reduces an array to a single value)
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15


// 📌 Sorting and Reversing
let letters = ["b", "c", "a", "d"];

// Sort (Alphabetically)
letters.sort();
console.log(letters);  // ["a", "b", "c", "d"]

// Reverse
letters.reverse();
console.log(letters);  // ["d", "c", "b", "a"]

// Sort numbers correctly
let number = [3, 10, 2, 8];
number.sort((a, b) => a - b);
console.log(number);  // [2, 3, 8, 10]

// ++++++++++++++++Interview Questions++++++++++++++++++
// 1️⃣ How do you create an empty array in JavaScript?
// ✅ Answer:
    let arr1 = [];
    let arr2 = new Array();

// 2️⃣ What is the difference between push() and unshift()?
// ✅ Answer:
// push() adds an element to the end of the array.
// unshift() adds an element to the beginning.
    let a = [1, 2, 3];
    a.push(4);  // [1, 2, 3, 4]
    a.unshift(0);  // [0, 1, 2, 3, 4]

// 3️⃣ What is the difference between .slice() and .splice()?
// ✅ Answer:
    let b = ["a", "b", "c", "d"];
    console.log(b.slice(1, 3));  // ["b", "c"]
    console.log(b.splice(1, 2, "x", "y"));  // ["b", "c"] (removed)
    console.log(b);  // ["a", "x", "y", "d"]

//  4️⃣ How do you check if a value is an array?
//  ✅ Answer:
    console.log(Array.isArray([1, 2, 3]));  // true
    console.log(Array.isArray("Hello"));  // false

//  5️⃣ How do you merge two arrays?
//  ✅ Answer:
    let arr_1 = [1, 2, 3];
    let arr_2 = [4, 5, 6];
    let merged1 = arr_1.concat(arr_2);
    console.log(merged1);  // [1, 2, 3, 4, 5, 6]

    // or using spread operator:
    let merged2 = [...arr1, ...arr2];
    console.log(merged2);  // [1, 2, 3, 4, 5, 6]
