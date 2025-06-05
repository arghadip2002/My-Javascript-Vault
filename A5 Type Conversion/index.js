let age = window.prompt("Type your age : "); // 25
age += 1;
console.log(age); // returns 251, coz 25 in prompt is a string
console.log(typeof age);

age = Number(age); // converts any datatype into Number.
console.log(age); // returns 26
console.log(typeof age);
