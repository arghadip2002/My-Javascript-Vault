// EASY WAY

// let username;
// username = window.prompt("Whats your username");
// console.log(username);

// PROFESSIONAL WAY

let username;

document.getElementById("myBtn").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
};
