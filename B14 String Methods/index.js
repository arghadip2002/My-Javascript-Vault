// Original string
let str = "JavaScript is amazing!";

// charAt(index): Returns the character at the specified index.
console.log(`Character at index 4: ${str.charAt(4)}`); // Output: "S"

// charCodeAt(index): Returns the Unicode value of the character at the specified index.
console.log(`Unicode at index 4: ${str.charCodeAt(4)}`); // Output: 83

// indexOf(searchValue): Returns the index of the first occurrence of a specified value.
console.log(`First occurrence of 'is': ${str.indexOf("is")}`); // Output: 11

// lastIndexOf(searchValue): Returns the index of the last occurrence of a specified value.
console.log(`Last occurrence of 'a': ${str.lastIndexOf("a")}`); // Output: 18

// slice(start, end): Extracts a section of the string between start and end indices.
console.log(`Slice from index 0 to 10: ${str.slice(0, 10)}`); // Output: "JavaScript"

// substring(start, end): Similar to slice but doesn't accept negative indices.
console.log(`Substring from index 0 to 10: ${str.substring(0, 10)}`); // Output: "JavaScript"

// substr(start, length): Extracts a section based on start index and length.
console.log(`Substr starting at index 11 with length 2: ${str.substr(11, 2)}`); // Output: "is"

// toUpperCase(): Converts the string to uppercase.
console.log(`Uppercase: ${str.toUpperCase()}`); // Output: "JAVASCRIPT IS AMAZING!"

// toLowerCase(): Converts the string to lowercase.
console.log(`Lowercase: ${str.toLowerCase()}`); // Output: "javascript is amazing!"

// includes(searchValue): Checks if the string contains the specified value.
console.log(`Includes 'amazing': ${str.includes("amazing")}`); // Output: true

// startsWith(searchValue): Checks if the string starts with the specified value.
console.log(`Starts with 'Java': ${str.startsWith("Java")}`); // Output: true

// endsWith(searchValue): Checks if the string ends with the specified value.
console.log(`Ends with '!': ${str.endsWith("!")}`); // Output: true

// repeat(count): Returns a new string with repeated copies of the original string.
console.log(`Repeated twice: ${str.repeat(2)}`); // Output: "JavaScript is amazing!JavaScript is amazing!"

// trim(): Removes whitespace from both ends of the string.
let strWithSpaces = "   Hello World!   ";
console.log(`Trimmed string: '${strWithSpaces.trim()}'`); // Output: "Hello World!"

// split(separator): Splits the string into an array based on a separator.
console.log(`Split by spaces: ${str.split(" ")}`); // Output: ["JavaScript", "is", "amazing!"]

// replace(searchValue, replaceValue): Replaces the first occurrence of a substring.
console.log(
  `Replace 'amazing' with 'awesome': ${str.replace("amazing", "awesome")}`
); // Output: "JavaScript is awesome!"

// replaceAll(searchValue, replaceValue): Replaces all occurrences of a substring.
let strRepeated = "hello hello hello";
console.log(
  `Replace all 'hello' with 'hi': ${strRepeated.replaceAll("hello", "hi")}`
); // Output: "hi hi hi"

// concat(string1, string2): Concatenates strings.
let str2 = " Let's code!";
console.log(`Concatenated string: ${str.concat(str2)}`); // Output: "JavaScript is amazing! Let's code!"

// length: Returns the length of the string.
console.log(`Length of string: ${str.length}`); // Output: 22
