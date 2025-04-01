// Stack(Primitive) & Heap(Non-Primitive)

let myYoutubeName = "pseudofarhan"; // Its the original one
let anotherName = myYoutubeName;    // Its just creates a copy
anotherName = "gitfarhan"

console.log(myYoutubeName); // pseudofarhan
console.log(anotherName);   // gitfarhan

// Heap
let userOne = {
    name: "Farhan",
    mail: "pseudofarhan@gmail.com"
}

let  userTwo = userOne;  // both userOne and userTwo is refering to a single data if one is changed two also shows the same changes

userOne.mail = "gitfarhan@gmail.com";   // will affect both the objects.

console.log(userOne);   // { name: 'Farhan', mail: 'gitfarhan@gmail.com' }
console.log(userTwo);   // { name: 'Farhan', mail: 'gitfarhan@gmail.com' }

console.log(userOne.mail);  // gitfarhan@gmail.com
console.log(userTwo.mail);  // gitfarhan@gmail.com

let person1 = { name: "Alice" };
let person2 = person1;  // Both point to the same object in heap memory

person2.name = "Bob";  // Modifies the same object

console.log(person1.name); // "Bob"
console.log(person2.name); // "Bob"


//-------------------------------------------------------

// Avoiding Heap Memory Issues
// Since objects in heap memory are referenced, accidental modification can happen. To prevent this:

// 1. Use the spread operator (...) for copying objects
let obj1 = { age: 25 };
let obj2 = { ...obj1 };  // Creates a new copy

obj2.age = 30;
console.log(obj1.age); // 25 (Original remains unchanged)

// 2.Use JSON methods for deep copying
let obj_1 = { age: 25 };
let obj_2 = JSON.parse(JSON.stringify(obj_1));  // Deep copy

obj2.age = 30;
console.log(obj1.age); // 25

// Conclusion
// Stack Memory is for primitive types (fast, fixed-size, stored by value).
// Heap Memory is for non-primitive types (objects, arrays, stored by reference).
// Objects and arrays are shared via reference, meaning modifying one affects all references.
// Use ... (spread operator) or JSON.stringify() for safe copying.