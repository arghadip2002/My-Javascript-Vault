let a = 5; // Number
let b = "5"; // String

// Loose equality (==): Checks value, allows type conversion
console.log(a == b); // Output: true (because "5" is converted to a number)

// Strict equality (===): Checks value AND type, no type conversion
console.log(a === b); // Output: false (because 5 is a number, and "5" is a string)

// Another example:
let c = 10;
let d = 10;

console.log(c === d); // Output: true (both value and type match)
