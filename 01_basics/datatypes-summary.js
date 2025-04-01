// DataTypes based on memory allocation

//  Primitive DataType:  Primitive data types are immutable (cannot be modified after creation) 
//                       and are stored by value in memory.

//  Non-Primitive DataType: Non-primitive data types are mutable and stored by reference in memory.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Dynamically typed
const score = 100   // number
const scoreValue = 100.3    // number

const isLoggedIn = false    // boolean
const outsideTemp = null    // object
console.log(typeof outsideTemp);    // object
let userEmail;  // type not defined
console.log(typeof userEmail);  // therefore undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // values same hone ke bawajud ye dono kabhi bhi same nahi hoga kyu ki humne symbol use kiya hai

// const bigNumber = 3456543576654356754n



// Reference (Non primitive): 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);      // symbol

console.log(typeof myFunction);     // function -> function object

console.log(typeof heros);      // Object

// https://262.ecma-international.org/5.1/#sec-11.4.3