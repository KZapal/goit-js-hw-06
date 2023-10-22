function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector(`body`);
const btn = document.querySelector(`.change-color`);
const color = document.querySelector(`.color`);

function changeColor() {
  body.style.cssText = `
  background-color: ${getRandomHexColor()}`;
  color.textContent = `${getRandomHexColor()}`;
}

btn.addEventListener(`click`, changeColor);
