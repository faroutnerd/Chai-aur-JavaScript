// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);   // prints each char
// }


// Maps -> key-value pairs (unique keys) and values can be duplicate

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// onjects are not iterable

// for (const [key, value] of myObject) {       // TypeError: myObject is not iterable
//     console.log(key, ':-', value);
// }

// ### IMPORTANT ###

// for of loop can be used with arrays, strings, maps, sets, and other iterable objects, but not with objects.
// for in loop can be used with arrays, strings, maps, sets, and objects. But it is not recommended to use it with arrays and strings.