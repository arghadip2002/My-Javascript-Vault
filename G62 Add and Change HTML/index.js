// Example 1 ----------------------------------------------------

// STEP 1 : CREATE THE ELEMENT

const newH1 = document.createElement("h1");

// STEP 2 : ADD ATTRIBUTES AND PROPERTIES

newH1.textContent = "I Like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 : APPEND ELEMENTS TO DOM

// document.body.append(newH1); // to add at last
// document.body.prepend(newH1); // to add at first

document.getElementById("Box1").append(newH1);
// document.getElementById("Box1").prepend(newH1);

// const box3 = document.getElementById("Box3");
// document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// STEP 4 : REMOVE HTML ELEMENT

// document.body.removeChild(newH1);
document.getElementById("Box1").removeChild(newH1);
