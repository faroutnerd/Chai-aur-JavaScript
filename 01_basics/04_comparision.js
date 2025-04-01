console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);   // converted to number 
console.log("02" > 1);  // but this won't be allowed in typescript

console.log(null > 0);  // false     kabhi NaN
console.log(null == 0); // false     kabhi NaN
console.log(null >= 0); // true      kanhi 0 -> null is converted to 0 

console.log(undefined == 0);    // false
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false

// ===      strict check(datatype ko bhi check krta hai)

console.log("2" === 2);     // here string compared  with number therefore false
