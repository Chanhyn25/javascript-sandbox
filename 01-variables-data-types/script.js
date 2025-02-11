console.log(100);
console.log('Hello world!');
console.log(20,'Hello',true);
// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/
// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'John';
// const lastName = 'Doe';
// let age = 30;

// console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// age = 31;
// console.log(age);

// With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);

// const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

// const person = {
//   name: 'Brad',
// };
// person.name = 'Nhi';
// person.email = 'brad@gmail.com';
// console.log(person);

// // Declare multiple values at once
// let a, b, c;
// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(a);
// let x;

// const arr = [28, 38, 44, 29, 109];
// let arr1,arr2;
// arr1= arr.slice(1,4);
// arr2= arr.slice(1,4);
// console.log(arr1,arr2);
// push() - thêm vào cuối mảng
// arr.push(100);

// // pop() - xoá phân từ cuối mảng
// arr.pop();

// // unshift() - thêm phần tử vào đầu mảng
// arr.unshift(99);

// // shift() - xoá phần tử đầu mảng
// arr.shift();

// // reverse() - đảo ngược mảng
// arr.reverse();
//  const fruits = ["apple", "orange", "pear"];
//  const berries = ["nhạt","không ngon","chán"];
// // x = [...fruits,...berries]; //nối 2 mảng
// x = [...fruits];
// const a = fruits;
// // a.push("táo"); 
// console.log({ fruits });
// // x.push("cam");
// // console.log(x);
// const arr = [1,2,[3,4,5],6,[7,8]];
// console.log(arr);
// //add CsS to logs
// const style = 'padding:10px; background-color:white; color:red';
// console.log('%cHello World',style);
// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/
//stri ng
// const lasttName = 'Sara';
// //number
// const age = 30;
// const temp = 98.8;
// //boolean
// const hasKids = true;
// //null
// const aptNumber = null;
// //undefined
// //let score;
// const score = undefined;
// // Symbol
// const id = Symbol('id');

// // BigInt
// const n = 9007199254740991n;

// // Reference Types

// const numbers = [1, 2, 3, 4];

// const person = {
//   name: 'Brad',
// };

// function sayHello() {
//   console.log('Hello');
// }

// const output = sayHello;

// console.log(output, typeof output);
// Value is stored in the stack
// const name = 'John';
// const age = 30;

// // Reference is stored in the heap
// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
// let amount = 'hello';

// // Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// // Convert number to string
// amount = amount.toString();
// amount = String(amount);

// // Convert string to decimal
// amount = parseFloat(amount);

// // Convert number to boolean
// amount = Boolean(amount);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);
// let xy;

// // Coerced to a string
// xy = 5 + '5';

// xy = 5 + Number('5');

// // Coerced to a number
// xy = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// xy = 5 + null;

// xy = Number(null);

// xy = Number(true);
// xy = Number(false);

// // true is coerced to a 1
// xy = 5 + true;

// // false is coerced to 0 (falsy)
// xy = 5 + false;

// // Undefined is coerced to 0 (falsy)
// xy = 5 + undefined;

// console.log(xy, typeof xy);
// let x;

// const name = 'John';
// const age = 31;

// // Concatenation
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template Literals
// x = `Hello, my name is ${name} and I am ${age} years old`;

// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key
// x = s[0];

// // Shows the prototype of the string object. Shows the properties and methods
// x = s.__proto__;

// // Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - returns the character at the specified index
// x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
// x = s.indexOf('d');

// // substring() - search a string for a specified value
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(-11, -6);

// // trim() - remove whitespace from beginning and end of string
// x = '         Hello World';
// x = x.trim();

// // replace() - replace all instances of a string
// x = s.replace('World', 'John');

// // includes() - returns true if the string is found
// x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
// x = s.valueOf();

// // split() - returns an array of strings
// x = s.split('');

// console.log(x);
// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);
// // +_%
// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');
// let x;
// let d = new Date();

// Date methods

// x = d.toString();

// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear();

// x = d.getMonth();
// x = d.getMonth() + 1;

// x = d.getDate();

// x = d.getDay();

// x = d.getHours();

// x = d.getMinutes();

// x = d.getSeconds();

// x = d.getMilliseconds();

// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// // Intl.DateTimeFormat API (locale specific)
// x = Intl.DateTimeFormat('en-US').format(d);
// x = Intl.DateTimeFormat('en-GB').format(d);
// x = Intl.DateTimeFormat('default').format(d);

// x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

// x = d.toLocaleString('default', { month: 'short' });

// x = d.toLocaleString('default', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   timeZone: 'America/New_York',
// });

// console.log(x);
// // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);

// console.log(d);
// 02
// let x;

// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// // Get value by index
// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';

// // length is not read-only
// // fruits.length = 2;

// fruits[3] = 'strawberry';

// // Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;

// console.log(x);
let x;

const arr = [28, 38, 44, 29, 109];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last value off
arr.pop();

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - Remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - Check to see if something is in the array
x = arr.includes(445);

// indexOf() - Return the index of the first match
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);