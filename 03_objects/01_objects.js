// singleton: 
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // square brackets are necessary for using it like Symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])    // cannot access this using . JsUser.fullname -> not allowed
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser); // this will make the object immutable
JsUser.email = "hitesh@microsoft.com"   // will not change
// console.log(JsUser);    

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this.name -> Hitesh, ### string interpolation ###
}

console.log(JsUser.greeting);   // [Function (anonymous)] -> this is a function
// console.log(JsUser.greetingTwo()); // Hello JS user, Hitesh

// JsUser.greeting;
// JsUser.greetingTwo();   // Hello JS user, Hitesh 