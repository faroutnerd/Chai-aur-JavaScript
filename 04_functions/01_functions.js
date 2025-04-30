function myName() {
    console.log("My name is Farhan");
}

myName();   // Call the function
myName;     // Just a function

function add(a, b) {
    console.log(a + b);
}

add(2, 3);  // Output: 5 -> Number
add(4, "5");    // Output: 45 -> String
add(5, "a");    // Output: 5a -> String
add("Hello", "World");  // Output: HelloWorld -> String

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 3);
console.log(result);
    
function loginUserMessage(user){
    return `${user} just logged in`;
}

console.log(loginUserMessage("Farhan"));    // Output: Farhan just logged in
console.log(loginUserMessage(""));          // Output:  just logged in
console.log(loginUserMessage());            // Output: undefined just logged in -> undefined is a falsy value

function loginUserMessage2(user){
    if(user === undefined) {
        console.log("Please enter a valid username");
        return;
    }
    return `${user} just logged in`;
}

console.log(loginUserMessage2("Farhan"));    // Output: Farhan just logged in
console.log(loginUserMessage2(""));          // Output:  just logged in
console.log(loginUserMessage2());            // Output: Please enter a valid username

function loginUserMessage3(user){
    if(!user) { // same as user === undefined
        console.log("Please enter a valid username");
        return;
    }
    return `${user} just logged in`;
}

console.log(loginUserMessage3("Farhan"));    // Output: Farhan just logged in
console.log(loginUserMessage3(""));          // Output:  just logged in
console.log(loginUserMessage3());            // Output: Please enter a valid username

function loginUserMessage4(user = "Hitesh"){  // default value
    if(!user) {
        console.log("Please enter a valid username");
        return;
    }
    return `${user} just logged in`;
}

console.log(loginUserMessage4("Farhan"));    // Output: Farhan just logged in
console.log(loginUserMessage4(""));          // Output:  undefined
console.log(loginUserMessage4());            // Output: Hitesh just logged in

function calculateCartPrice(num) {
    return num;
}

console.log(calculateCartPrice(100));   // Output: 100
console.log(calculateCartPrice());      // Output: undefined
console.log(calculateCartPrice(200, 400, 800));     // Output: 200 -> only first argument is considered

function calculateAll1(...num) {  // rest operator ...num
    return num;
}

console.log(calculateAll1(100));   // Output: [100]  -> Array
console.log(calculateAll1());      // Output: []
console.log(calculateAll1(200, 400, 800));     // Output: [200, 400, 800]

// Important for INTERVIEW
function calculateAll2(val1, val2, ...num) {  // rest operator ...num
    return num;
}

console.log(calculateAll2(100));   // Output: [100]  -> Array
console.log(calculateAll2());      // Output: []
console.log(calculateAll2(200, 400, 800));     // Output: [800] -> 200 and 400 is not included in the array as they are not part of the rest operator
console.log(calculateAll2(2, 4, 8, 10));    // Output: [8, 10] -> 2 and 4 is not included in the array as they are not part of the rest operator

const user = {
    name: "Farhan",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user); // Output: Username is Farhan and price is 199
handleObject({name: "Hitesh", price: 299}); // Output: Username is Hitesh and price is 299 -> Object destructuring
handleObject({name: "Hitesh"}); // Output: Username is Hitesh and price is undefined -> Object destructuring

handleObject({}); // Output: Username is undefined and price is undefined

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // Output: 2
console.log(returnSecondValue([1, 2, 3])); // Output: 2
console.log(returnSecondValue([])); // Output: undefined
console.log(returnSecondValue([1])); // Output: undefined