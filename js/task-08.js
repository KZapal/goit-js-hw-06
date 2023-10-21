const loginForm = document.querySelector(`.login-form`);
const btn = loginForm.lastElementChild;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (form.elements.email.value === `` || form.elements.password.value === ``) {
    return console.log(`Proszę uzupełnić formularz!`);
  }
  const newObject = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  form.reset();
  console.log(newObject);
}

loginForm.addEventListener(`submit`, handleSubmit);
