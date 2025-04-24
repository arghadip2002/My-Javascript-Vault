// Function for addition
function add(a, b) {
  return a + b;
}

// Function for subtraction
function subtract(a, b) {
  return a - b;
}

// Function for multiplication
function multiply(a, b) {
  return a * b;
}

// Function for division
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Division by zero is not allowed.");
    return null; // Return null for invalid division
  }
}

// Function to check if an email is valid (contains @)
function checkEmail(email) {
  const result = email.includes("@") ? "Valid Email" : "Invalid Email"; // Ternary operator
  console.log(`Email: ${email} - ${result}`);
}

// Example usage of calculator operations
console.log("Calculator Operations:");
const num1 = 10,
  num2 = 5;
console.log(`Addition of ${num1} and ${num2}: ${add(num1, num2)}`);
console.log(`Subtraction of ${num1} and ${num2}: ${subtract(num1, num2)}`);
console.log(`Multiplication of ${num1} and ${num2}: ${multiply(num1, num2)}`);
console.log(`Division of ${num1} and ${num2}: ${divide(num1, num2)}`);

// Example usage of email validation
console.log("\nEmail Validation:");
checkEmail("example@domain.com"); // Valid email
checkEmail("invalidemail.com"); // Invalid email
