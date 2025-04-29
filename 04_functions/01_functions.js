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

function loginUserMessage4(user = "Shreya"){
    if(!user) {
        console.log("Please enter a valid username");
        return;
    }
    return `${user} just logged in`;
}

console.log(loginUserMessage4("Farhan"));    // Output: Farhan just logged in
console.log(loginUserMessage4(""));          // Output:  undefined
console.log(loginUserMessage4());            // Output: Shreya just logged in