const enterText = document.getElementById("enterText");
const enterGNumber = document.getElementById("myText");
const submitButton = document.getElementById("mySubmit");
const result = document.getElementById("myP");

// Define the minimum and maximum range
const min = 1;
const max = 100;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0; // Track the number of attempts
let guess = 0; // Initialize the player's guess

enterText.textContent = `Enter the Guessed Number`;
submitButton.onclick = function () {
  guess = Number(enterGNumber.value); // Convert input using Number()

  if (guess < min || guess > max || isNaN(guess)) {
    result.textContent = `Invalid Guess`;
  } else if (guess < randomNumber) {
    attempts++;
    result.textContent = `Too Low, Try Again`;
  } else if (guess > randomNumber) {
    attempts++;
    result.textContent = `Too High, Try Again`;
  } else {
    attempts++;
    result.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
  }
};
