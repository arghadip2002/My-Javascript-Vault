const myButton = document.getElementById("myHide");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
    myImg.style.margin = "auto";
    myButton.textContent = "Hide";
  } else {
    myImg.style.display = "none";
    myButton.textContent = "Show";
  }
});

// myButton.addEventListener("click", (event) => {
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//     myButton.textContent = "Hide";
//   } else {
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "Show";
//   }
// });
