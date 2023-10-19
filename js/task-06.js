const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener(`blur`, (event) => {
  const value = event.currentTarget.value;
  const textLength = value.length;
  if (textLength > textInput.getAttribute(`data-length`)) {
    textInput.style.cssText = `border-color: #4caf50;`;
  } else if (textLength < textInput.getAttribute(`data-length`)) {
    textInput.style.cssText = `border-color: #f44336;`;
  }
});
