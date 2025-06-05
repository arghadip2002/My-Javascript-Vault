const textBox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  temp = Number(textBox.value); // Ensure the input is converted to a number

  if (toFahrenheit.checked) {
    // Celsius to Fahrenheit formula
    let fahrenheit = temp * 1.8 + 32;
    result.textContent = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  } else if (toCelsius.checked) {
    // Fahrenheit to Celsius formula
    let celsius = (temp - 32) / 1.8;
    result.textContent = `${temp}°F is equal to ${celsius.toFixed(2)}°C`;
  } else {
    result.textContent = "Please Select a Unit";
  }
}
