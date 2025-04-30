var e = 5000; // global scoped

if(true){
    let a = 1;
    const b = 2;
    var c = 3; // function scoped or global scoped
    var e = 4; // function scoped or global scoped
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 3 (accessible because var is function scoped or global scoped)
// console.log(d); // ReferenceError: d is not defined (d is not declared anywhere)
console.log(e); // 4 (e is redeclared in the block scope, but var is function scoped or global scoped)

let x = 10; // global scoped
if(true){
    let x = 20; // block scoped
    console.log("inside block scope x: ", x); // 20 (x is block scoped)
}
console.log("outside block scope x: ", x); // 10 (x is global scoped)

var y = 10; // global scoped
if(true){
    let y = 20; // function scoped or global scoped
    console.log("inside block scope y: ", y); // 20 (y is function scoped or global scoped)
}
console.log("outside block scope y: ", y); // 10 (y is global scoped)

const z = 10; // global scoped
if(true){
    const z = 20; // block scoped
    console.log("inside block scope z: ", z); // 20 (z is block scoped)
}
console.log("outside block scope z: ", z); // 10 (z is global scoped)

function One(){
    const username = "Farhan";
    function Two(){
        const website = "youtube.com";
        console.log(username); // Farhan (accessible because of closure)
    }
    // console.log(website); // ReferenceError: website is not defined (website is not accessible here)
    Two(); // Call the inner function to access the variable   
}

// One(); // Call the outer function to access the variable

if(true){
    const username = "Farhan";
    if(username === "Farhan"){
        const website = "chalo.com";
        console.log(username + " " + website); // Farhan chalo.com (accessible because of closure)
    }
    // console.log(website); // ReferenceError: website is not defined (website is not accessible here)
}

// console.log(username); // ReferenceError: username is not defined (username is not accessible here)
