let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // event.target.style.backgroundColor = "tomato";

    if (event.target.style.backgroundColor === "tomato")
      event.target.style.backgroundColor = "white";
    else {
      event.target.style.backgroundColor = "tomato";
    }

    // buttons.forEach((button01) => {
    //   button01.style.backgroundColor = "tomato";
    // });
  });
});
