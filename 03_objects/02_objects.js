const tinderUser = new Object();    // singleton object
// const tinderUser = {};       // non-singleton object

// console.log(tinderUser);    // {} -> empty object

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);    // { id: '123abc', name: 'John' }

const regularUser = {
    email: "somone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser);                                   // { email: 'somone@gmail.com', fullname: { userfullname: { firstname: 'Hitesh', lastname: 'Choudhary' } } }
// console.log(regularUser.fullname);                          // { userfullname: { firstname: 'Hitesh', lastname: 'Choudhary' } }
// console.log(regularUser.fullname.userfullname);             // { firstname: 'Hitesh', lastname: 'Choudhary' }
// console.log(regularUser.fullname.userfullname.firstname);   // Hitesh

// console.log(regularUser.fullname?.userfullname.firstname);  // ? -> optional chaining

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2};    // {1: 'a', 2: 'b', 3: 'c', 4: 'd'} -> spread operator
const obj_ = {obj1, obj2};  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } -> nested object
const obj4 = Object.assign({}, obj1, obj2);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } -> Object.assign
                        // target, source1, source2, source3, ...
// console.log(obj3);
// console.log(obj_);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };  

const returnedTarget = Object.assign(target, source);   // first one will be target and then every other will be source
// console.log(returnedTarget);    // { a: 1, b: 4, c: 5 }

const users = [
    {
        id: 1,
        email: "q0Cm2@example.com",
    },
    {
        id: 2,
        email: "z9bY4@example.com",
    },
    {
        id: 3,
        email: "z9bY4@example.com",
    }
]

users[0].email = "hitesh@gmail.com"

// console.log(users[0].email);    // hitesh@gmail.com

// console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] -> returns all the keys in the object
// console.log(Object.values(tinderUser));    // [ '123abc', 'John', false ] -> returns all the values in the object
// console.log(Object.entries(tinderUser));    // [ [ 'id', '123abc' ], [ 'name', 'John' ], [ 'isLoggedIn', false ] ] -> returns all the entries in the object

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));   // true

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

// Destructuring
const { courseInstructor } = course;
// console.log(courseInstructor);  // Hitesh

// Destructuring with aliases
const { courseInstructor: instructor } = course;
console.log(instructor);    // Hitesh

// Destructuring in functions
const navbar = ({company}) => {

}

navbar(company = "Google"); // Google

// // JSON
// {
//     "name": "Hitesh",
//     "coursename": "JavaScript",
//     "price": "999"
// }

// Array
[
    {},
    {},
    {}
]