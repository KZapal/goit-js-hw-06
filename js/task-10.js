function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector(`#controls`);
const boxes = document.querySelector(`#boxes`);
const input = controls.firstElementChild;
const createBtn = input.nextElementSibling;
const destroyBtn = createBtn.nextElementSibling;

function createBoxes(amount) {
  amount = input.value;
  if (amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement(`div`);
      newDiv.style.width = 30 + 10 * i + `px`;
      newDiv.style.height = 30 + 10 * i + `px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(newDiv);
    }
  }
}

createBtn.addEventListener(`click`, createBoxes);

destroyBtn.addEventListener(`click`, () => {
  boxes.innerHTML = ``;
});
