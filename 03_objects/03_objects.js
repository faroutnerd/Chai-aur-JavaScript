// JavaScript Objects Complete Revision with Interview Questions

// =========================================
// 1. Creating an Object
// =========================================

// 1.1 Object Literal Syntax (Most common)
const person = {
    name: "John",
    age: 30,
    isStudent: false,
  };
  
  // 1.2 Using new Object()
  const person2 = new Object();
  person2.name = "Jane";
  person2.age = 25;
  
  // 1.3 Using Constructor Function
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person3 = new Person("Mike", 40);
  
  // =========================================
  // 2. Accessing Object Properties
  // =========================================
  
  // 2.1 Dot Notation
  console.log(person.name); // Output: John
  
  // 2.2 Bracket Notation
  console.log(person["age"]); // Output: 30
  
  // Use bracket notation if property name is dynamic or has special characters
  
  // =========================================
  // 3. Adding, Updating, and Deleting Properties
  // =========================================
  
  // Adding a new property
  person.city = "New York";
  
  // Updating existing property
  person.age = 35;
  
  // Deleting a property
  delete person.isStudent;
  
  console.log(person);  // Output: { name: 'John', age: 35, city: 'New York' }
  
  // =========================================
  // 4. Object Methods (Function inside Object)
  // =========================================
  
  const student = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);    // String Interpolation
    }
  };
  
  student.greet(); // Output: Hello, my name is Alice
  
  // =========================================
  // 5. Built-in Object Methods
  // =========================================
  
  // Object.keys() -> Returns array of keys
  console.log(Object.keys(person));
  
  // Object.values() -> Returns array of values
  console.log(Object.values(person));
  
  // Object.entries() -> Returns array of key-value pairs
  console.log(Object.entries(person));
  
  // Object.assign() -> Copies properties from source to target
  const copiedPerson = Object.assign({}, person);
  console.log(copiedPerson);
  
  // Object.freeze() -> Freezes object (cannot add/update/delete properties)
  Object.freeze(person);
  // person.age = 50; // Will not change
  
  // Object.seal() -> Seal object (cannot add/remove properties, but can update existing)
  Object.seal(person2);
  person2.age = 28; // ✅ Allowed -> Updating existing property is allowed
  // person2.newProp = "test"; // ❌ Not allowed -> Adding new property not allowed
  
  console.log(person2);
  
  // =========================================
  // 6. Looping Over Objects
  // =========================================
  
  // Using for...in loop
  for (let key in student) {
    console.log(key, student[key]);
  }
  
  // Using Object.keys() and forEach
  Object.keys(student).forEach(key => {
    console.log(key, student[key]);
  });
  
  // =========================================
  // 7. Nested Objects
  // =========================================
  
  const employee = {
    name: "Bob",
    address: {
      city: "Los Angeles",
      zip: 90001,
    },
  };
  
  console.log(employee.address.city); // Output: Los Angeles
  
  // =========================================
  // 8. Important Points About Objects
  // =========================================
  
  // - Objects are reference types stored in heap memory.
  // - Copying an object creates a reference, not a new object.
  // - Keys are always strings or symbols.
  
  // =========================================
  // 9. Quick Interview Questions and Answers
  // =========================================
  
  /*
  Q1. How do you create an object in JavaScript?
  Ans: Using object literals {}, new Object(), or constructor functions.
  
  Q2. How do you access a property dynamically?
  Ans: Using bracket notation: object["propertyName"]
  
  Q3. What is the difference between Object.freeze() and Object.seal()?
  Ans:
  - freeze() makes the object completely immutable (can't add, remove, or update properties).
  - seal() allows updating existing properties but prevents adding/removing.
  
  Q4. How do you loop over an object's properties?
  Ans: Using for...in loop or Object.keys(obj).forEach(callback).
  
  Q5. Are object keys ordered?
  Ans: From ES6 onwards, object keys are ordered in insertion order for string and symbol keys.
  
  Q6. How to create a shallow copy of an object?
  Ans: Using spread operator {...obj} or Object.assign({}, obj).
  
  Q7. How to create a deep copy of an object?
  Ans: Using JSON.parse(JSON.stringify(obj)) or lodash's _.cloneDeep(obj).
  */
  
  // =========================================
  // End of Object Revision
  // =========================================
  