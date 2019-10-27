// String, Numbers, Boolean, null, undefined
const name = 'John'; // String
const age = 15; // Number
const isLegal = false; // Boolean
const uberRating = 3.3; // Number
const x = null; 
const y = undefined;
let z; // Undefined
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLegal);
console.log(typeof uberRating);
console.log(typeof y);

// String concatenation
console.log("My name is " + name + " and I am " + age + " years old.");
// String Interpolation: lets you to inject variables & logic directly into a string
console.log(`My name is ${name} and I am ${age} years old.`);

// String operations and properties
const str = "Hello World";
console.log(`The length of s is ${str.length}`);
console.log(str.substring(0, 5)); // From index 0 to index 4 (2nd parameter exclusive)
let nums = "1,2,3,4,5";
console.log(nums.split(',')); // Splits string by delimiter

// Arrays
const integers = new Array(1, 2, 3, 4);
console.log(integers);
const fruits = ['apples', 'oranges', 'bananas', 'mangoes'];
console.log(fruits);
console.log(`The length of fruits is ${fruits.length}`);
const mixArr = ['1', 2, true]; // Array with different data types
console.log(mixArr);
// Accessing elements in array
console.log(fruits[1]); // index starts at 0
// Add element to array if you know array size
fruits[4] = 'grapes';
console.log(fruits);
// Add element to end of array if size is unknown
fruits.push('pears');
console.log(fruits);
// fruits = []; is illegal since it is being assigned to a different array
// Add element to beginning of array
fruits.unshift('strawberries');
console.log(fruits);
// Remove last element in array
fruits.pop();
console.log(fruits);
// Remove from beginning of array
fruits.shift();
console.log(fruits);
// Remove element at specific index
fruits.splice(0,0);
console.log(fruits);
// Remove range of elements
fruits.splice(1, 3);
console.log(fruits);

// Object Literals
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 70,
    hobbies: ['hiking', 'drinking', 'science', 'inventing'],
    address: {
        street: '123 main st',
        city: 'Blacksburg',
        state: 'Virginia'
    }
};
console.log(person);
// Access single value
console.log(person.firstName);
console.log(person.hobbies[2]);
console.log(person.address.street);
// Destructuring - create variables
const {firstName, lastName, address: {state}} = person;
console.log(firstName, lastName, state);
// Add property to object
person.email = 'johndoe@gmail.com';
console.log(person);

// For loops
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'finish hw',
        isComplete: false
    },
    {
        id: 3,
        text: 'meet with adviser',
        isComplete: false
    }
];
// set iterator value, set bound, set increment value
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Array traversal
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// For Each
for (let todo of todos) {
    console.log(todo.id);
}
todos.forEach((todo) => {
    console.log(todo);
});

// While loop
let counter = 0; 
while (counter < 10) {
    console.log(counter * counter);
    counter++;
}

// Do while
counter = 0;
do {
    console.log(counter * counter);
    counter++;
}
while (counter < 10);

// Conditionals
counter = 0;
if (counter === 0) {
    console.log('counter equals to 0');
}
else if (counter < 0) {
    console.log('counter is negative');
}
else {
    console.log('counter is positive');
}

// Functions
function isEven(x) {
    return x % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(3));

const mean = (set) => {
    let sum = 0;
    for (let i = 0; i < set.length; i++) {
        sum += set[i];
    }
    return sum / set.length;
};

console.log(mean([1, 2, 3]));
console.log(mean([3,5,3,2,3,4,5]));