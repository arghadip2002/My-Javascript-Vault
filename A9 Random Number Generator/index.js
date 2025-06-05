// const MAX = 100;
// const MIN = 50;

// let randomNum = Math.random() * (MAX - MIN) + MIN;
// randomNum = Math.round(randomNum);
// console.log(randomNum);

const MAX = 100;
const MIN = 50;

let randomNum;

document.getElementById("button").onclick = function () {
  randomNum = Math.random() * (MAX - MIN) + MIN;
  randomNum = Math.round(randomNum);
  document.getElementById("myH2").textContent = randomNum;
};
