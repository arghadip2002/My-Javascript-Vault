// .firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// .lastElementChild

const elementlast = document.getElementById("fruits");
const lastChild = elementlast.lastElementChild;
lastChild.style.backgroundColor = "yellow";

// .nextElementSibling

const elementNext = document.getElementById("Beets");
const nextSibling = elementNext.nextElementSibling;
nextSibling.style.backgroundColor = "red";

const elementNext01 = document.getElementById("Onions");
const nextSibling01 = elementNext01.nextElementSibling;
// nextSibling01.style.backgroundColor = "red";
console.log(nextSibling);
console.log(nextSibling01);

// .previousElementSibling

const elementprevious = document.getElementById("Beets");
const previousSibling = elementprevious.previousElementSibling;
// previousSibling.style.backgroundColor = "red";

const elementprevious01 = document.getElementById("Onions");
const previousSibling01 = elementprevious01.previousElementSibling;
previousSibling01.style.backgroundColor = "red";
console.log(previousSibling);
console.log(previousSibling01);

// .parentElement

const parentDiv = document.getElementById("Beets");
const parent = parentDiv.parentElement;
parent.style.backgroundColor = "green";

// .childElement

const childDiv = document.getElementById("desserts");
const child = childDiv.children;

console.log(child);

// child[0].style.backgroundColor = "orange";

Array.from(child).forEach((c) => {
  // converting the HTMLCollection to a array and adding the style.backgroundColor property to all children
  c.style.backgroundColor = "orange";
});
