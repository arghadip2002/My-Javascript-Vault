// DOM - Document Object Model

const username = window.prompt("Username : ");

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? " " + "Guest" : " " + username;
