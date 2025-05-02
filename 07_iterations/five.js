// forEach loop is used to iterate over arrays, but it is not a loop. It is a method of the Array object.

const coding = ["js", "ruby", "java", "python", "cpp"];

// Anonymous function
coding.forEach(function (val) {
  // console.log(val);
});

// arrow function
coding.forEach((item) => {
  // console.log(item);
});

// ### IMPORTANT ###
function printMe(item) {
  // console.log(item);
}

coding.forEach(printMe); // prints each item in the array, we need to pass the function name as a parameter

// #### IMPORTANT ###
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
//   console.log(item.languageName);
});
