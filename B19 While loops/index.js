// Example of a while loop
let count = 1;

console.log("While loop:");

// The while loop checks the condition BEFORE executing the block of code.
// If the condition is true, the code inside the loop runs.
// In this case, the loop will run as long as 'count' is less than or equal to 5.
while (count <= 5) {
  console.log(`Count is: ${count}`); // Prints the value of 'count'
  count++; // Increments 'count' by 1 in each iteration
}
// Once 'count' becomes greater than 5, the loop stops.

// Example of a do-while loop
let num = 1;

console.log("Do-While loop:");

// The do-while loop executes the block of code FIRST,
// then checks the condition AFTER the code has executed.
// This ensures the block runs at least once, even if the condition is false initially.
do {
  console.log(`Num is: ${num}`); // Prints the value of 'num'
  num++; // Increments 'num' by 1 in each iteration
} while (num <= 5);
// The loop continues as long as 'num' is less than or equal to 5.
