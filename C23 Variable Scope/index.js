// Global variable - Accessible everywhere
let globalNumber = 10; // This variable is declared outside any function

// Function 1: Add a number to the global variable
function addToGlobal(number) {
  return globalNumber + number; // Uses the global variable without any conflict
}

// Function 2: Multiply two numbers (local variables only)
function multiplyNumbers(a, b) {
  let product = a * b; // Local variable 'product' declared inside the function
  return product;
}

// Function 3: Show scope example and possible conflicts
function scopeExample() {
  let globalNumber = 5; // Local variable with the same name as the global variable
  console.log("Inside function, local globalNumber:", globalNumber);
  // Accesses the local variable 'globalNumber', which **shadows** the global one

  let localNumber = 20; // Local variable unique to this function
  console.log("Inside function, localNumber:", localNumber);
}

// Using the functions
console.log("Global variable globalNumber:", globalNumber); // Access the global variable
console.log("Add 5 to globalNumber:", addToGlobal(5)); // No conflict; global variable used
console.log("Multiply 3 and 4:", multiplyNumbers(3, 4)); // No conflict; uses local variables
scopeExample(); // Demonstrates variable shadowing
console.log("Global variable globalNumber after scopeExample:", globalNumber);
// Accesses the original global variable again (unchanged by the local variable)
