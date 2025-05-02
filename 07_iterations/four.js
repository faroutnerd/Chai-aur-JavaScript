// ### IMPORTANT ###

// for of loop can be used with arrays, strings, maps, sets, and other iterable objects, but not with objects.
// for in loop can be used with arrays, strings, maps, sets, and objects. But it is not recommended to use it with arrays and strings.

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {    // TypeError: map is not iterable
    console.log(key);
}