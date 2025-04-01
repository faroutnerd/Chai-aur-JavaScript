const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);    // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// it pushed the array as an element..

console.log(marvel_heros); 
console.log(marvel_heros[3][1]);    // flash


// .concat method returns a new array //
const allHeros = marvel_heros.concat(dc_heros)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] 
// works perfectly
console.log(allHeros);  

const all_new_heros = [...marvel_heros, ...dc_heros]    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// simply joins the two arrays
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);    // Infinity -> depth of the array
console.log(real_another_array);    // [1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray("Hitesh"))    // false
console.log(Array.from("Hitesh"))   // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting -> [] -> keys ka array banau ya Values ka? so at the end it gives the null array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));