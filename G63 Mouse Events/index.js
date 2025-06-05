const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Yoo!!";
// }

// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Yoo!!";
// });

// myBox.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Dont do it!!";
// });

// myBox.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "Click Me";
// });

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "Yoo!!";
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Dont do it!!";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click Me";
});
