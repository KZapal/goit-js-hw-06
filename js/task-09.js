function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(`.widget`);
const btn = document.querySelector(`.change-color`);
const color = document.querySelector(`.color`);

function changeColor() {
  widget.style.cssText = `
  background-color: ${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
}

btn.addEventListener(`click`, changeColor);
