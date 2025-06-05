document.getElementById("button").onclick = function checkNumber() {
  let input = document.getElementById("userInput").value;
  let resultElement = document.getElementById("result");

  input = Number(input);

  if (input % 2 === 0) {
    resultElement.textContent = "The number is even!";
  } else {
    resultElement.textContent = "The number is odd!";
  }
};
