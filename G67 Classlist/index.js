// 1. add()
// 2. remove()
// 3. toggle(remove if present, add if not)
// 4. replace(old class, new class)
// 5. contains()

const myButton = document.getElementById("myButtons");

// myButton.classList.add("enabled");
// myButton.classList.toggle("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("click", (event) => {
//    myButton.classList.toggle("enabled");
//    myButton.classList.add("enabled");
// });
myButton.classList.add("enabled");

myButton.addEventListener("click", (event) => {
  myButton.classList.replace("enabled", "disabled");
});
