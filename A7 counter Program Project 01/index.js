let count = 0;

document.getElementById("myH1").textContent = count;

document.getElementById("Increment").onclick = function () {
  count += 1;
  document.getElementById("myH1").textContent = count;
};

document.getElementById("Reset").onclick = function () {
  count = 0;
  document.getElementById("myH1").textContent = count;
};

document.getElementById("Decrement").onclick = function () {
  count -= 1;
  document.getElementById("myH1").textContent = count;
};
