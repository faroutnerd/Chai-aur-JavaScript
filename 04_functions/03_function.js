
// Function Declaration inside object
const user = {
    username: "John",
    price: 999,
    welcomeMessage: function() {
        console.log("Welcome " + this.username + " to our website! Your price is " + this.price);
        console.log(this); // this refers to the user object
        
    }
}
user.welcomeMessage(); // Output: Welcome John to our website! Your price is 999
user.username = "Hitesh";
user.welcomeMessage(); // Output: Welcome Hitesh to our website! Your price is 999

console.log(this); // Output: {} -> Window object in browser or global object in Node.js ### IMPORTANT ###

// console.log(this.username); // Output: undefined -> this refers to the global object, which doesn't have a username property

// this keyword refers to the global object in non-strict mode, and undefined in strict mode. In a function, this refers to the global object unless the function is called as a method of an object.
function chai1() {
    let username = "Farhan";
    console.log(this);  // global object -> lamba sa gyan...
    console.log(this.username); // undefined -> 
    
}
chai1(); // Output: {} -> Window object in browser or global object in Node.js ### IMPORTANT ###

// same as above function chai1()
const chai2 = function () {
    let username = "Farhan";
    console.log(this);  // global object -> lamba sa gyan...
    console.log(this.username); // undefined -> 
}
chai2();

const chai3 = () => {
    let username = "Farhan";
    console.log(this);  // {} -> not like other two functions
    console.log(this.username); // undefined -> 
}
chai3();

const addTwo = (num1, num2) => {
    return num1 + num2; // Arrow function returns the sum of two numbers
}
console.log(addTwo(2, 3)); // Output: 5

// Arrow function with implicit return
// Arrow functions can have an implicit return if they consist of a single expression
const multiplyTwo = (num1, num2) => num1 * num2; // implicit return
console.log(multiplyTwo(2, 3)); // Output: 6

const returningObject1 = () => {username: "Farhan" }; // This will not work as expected because the object is not wrapped in parentheses
console.log(returningObject1()); // Output: undefined

const returningObject2 = () => ({username: "Farhan"}); // This will work as expected because the object is wrapped in parentheses
console.log(returningObject2()); // Output: {username: "Farhan"}