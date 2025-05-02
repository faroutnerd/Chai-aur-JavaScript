const userEmail = [] // -> empty array is truthy

if (userEmail) {    
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Got user email

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// an empty string, zero, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}
// a non-empty string, non-zero number, non-empty array, non-empty object, non-null object, non-null function


console.log(false == 0); // true
console.log(false === 0); // false
console.log(false == ""); // true
console.log(false === ""); // false
console.log(false == null); // false
console.log(false == undefined); // false
console.log(false == NaN); // false
console.log(false == []); // true
console.log(false == {}); // false
console.log(false == function(){}); // false
console.log(false == true); // false
console.log(false == "0"); // true
console.log(false == "false"); // false
console.log(false == " "); // false
console.log(false == 1); // false
console.log(false == -1); // false
console.log(false == 0n); // true
console.log(false == BigInt(0)); // true
console.log(false == BigInt(1)); // false
console.log(false == BigInt(-1)); // false
console.log(false == BigInt(0n)); // true
console.log(false == BigInt(0)); // true
console.log(false == BigInt(1n)); // false
console.log(false == BigInt(-1n)); // false



if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // Object.keys(emptyObj) will return an array of keys in the object.
    console.log("Object is empty");
}

/*
Nullish Coalescing Operator (??)

The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is similar to the logical OR operator (||), but it only considers null and undefined as "nullish" values, while the OR operator considers any falsy value (such as 0, "", NaN, etc.) as "false".
This means that the nullish coalescing operator can be used to provide default values for variables that may be null or undefined, without affecting other falsy values.
*/

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20



console.log(val1);  // 5
console.log(val2);  // 10
console.log(val3);  // 15
console.log(val4);  // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")