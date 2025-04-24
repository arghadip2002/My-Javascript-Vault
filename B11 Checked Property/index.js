const myCheckbox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaBtn");
const masterButton = document.getElementById("masterBtn");
const paypalButton = document.getElementById("paypalBtn");
const submitButton = document.getElementById("mySubmit");
const paymentResult = document.getElementById("paymentResult");
const subResult = document.getElementById("subResult");

submitButton.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are Subscribed`;
  } else {
    subResult.textContent = `You are not Subscribed`;
  }

  if (visaButton.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (paypalButton.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else if (masterButton.checked) {
    paymentResult.textContent = `You are paying with Master Card`;
  } else {
    paymentResult.textContent = `Choose a Payment Method`;
  }
};
