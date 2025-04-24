// No Method Chaining

let username = window.prompt("Enter Your Username : ");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraCharacters = username.slice(1);
// extraCharacters = extraCharacters.toLowerCase();

// username = letter + extraCharacters;

// console.log(username);

// Method Chaining

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
