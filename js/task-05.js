const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

function changeName() {
  textOutput.textContent = textInput.value;
  if (textInput.value === ``) {
    textOutput.textContent = `Anonymous`;
  }
}

textInput.addEventListener(`input`, changeName);
