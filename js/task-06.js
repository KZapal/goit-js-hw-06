const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener(`blur`, borderColor);

function borderColor() {
  const value = textInput.value;
  const textLength = value.length;
  if (textLength == textInput.getAttribute(`data-length`)) {
    textInput.style.cssText = `border-color: #4caf50;`;
  } else if (textLength < textInput.getAttribute(`data-length`)) {
    textInput.style.cssText = `border-color: #f44336;`;
  } else if (textLength > textInput.getAttribute(`data-length`)) {
    textInput.style.cssText = `border-color: #f44336;`;
  }
}
