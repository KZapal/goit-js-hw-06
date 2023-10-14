//const btn = document.querySelector(`button`);
let value = document.querySelector(`#value`);
const addBtn = document.querySelector(`button[data-action="increment"]`);
const subtractBtn = document.querySelector(`button[data-action="decrement"]`);

let counterValue = 0;

function add() {
  if (addBtn.getAttribute("data-action") === "increment") {
    counterValue += 1;
  }
  return (value.textContent = counterValue);
}

function subtract() {
  if (subtractBtn.getAttribute("data-action") === "decrement") {
    counterValue -= 1;
  }
  return (value.textContent = counterValue);
}

addBtn.addEventListener(`click`, add);
subtractBtn.addEventListener(`click`, subtract);
