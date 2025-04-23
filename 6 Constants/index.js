// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("myBtn").onclick = function () {
  radius = Number(document.getElementById("myText").value);
  circumference = 2 * PI * radius;
  document.getElementById(
    "myH2"
  ).textContent = `The circumference of the circle is ${circumference}`;
};
