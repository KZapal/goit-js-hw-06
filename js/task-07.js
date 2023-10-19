const slide = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

const changeSize = () => {
  text.style.cssText = `
  font-size: ${slide.value}px`;
};

slide.addEventListener(`mousemove`, changeSize);
