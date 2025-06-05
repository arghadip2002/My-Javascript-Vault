// 1. document.getElementById() -> ELEMENT or NULL

const myHeading = document.getElementById("myHeading");

myHeading.style.backgroundColor = "Yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

// 2. document.getElementsByClassName() -> HTML COLLECTION

const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "Red";
// fruits[1].style.backgroundColor = "yellow";
// fruits[2].style.backgroundColor = "orange";

for (let fruit of fruits) {
  fruit.style.backgroundColor = "Yellow";
}

console.log(fruits);

// 3. document.getElementsByTagName() -> HTML COLLECTION

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "yellow";
// h4Elements[1].style.backgroundColor = "yellow";

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "Yellow";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "Red";
}

console.log(h4Elements);
console.log(liElements);

// 4. document.querySelector() -> FIRST ELEMENT or NULL

const element = document.querySelector(".fruits"); // ".className" or "tagname"
console.log(element);

element.style.backgroundColor = "orange";

// 5. document.querySelectorAll() -> NODELIST

const fruitsAll = document.querySelectorAll(".fruits"); // ".className" or "tagname"
console.log(element);

fruitsAll[0].style.backgroundColor = "green";

console.log(fruitsAll);
