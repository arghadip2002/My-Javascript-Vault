const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// document.addEventListener("keydown", (event) => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "Yoo!!";
//   console.log(event.key);
// });

// document.addEventListener("keyup", (event) => {
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Dont do it!!";
//   console.log(event.key);
// });

const moveAmount = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.marginTop = `${y}px`;
    myBox.style.marginLeft = `${x}px`;

    console.log(x);
    console.log(y);
  }
});

document.addEventListener("keydown", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "😲";
});

document.addEventListener("keyup", (event) => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "😀";
});
