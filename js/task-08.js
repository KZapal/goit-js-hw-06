const loginForm = document.querySelector(`.login-form`);
const btn = loginForm.lastElementChild;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === `` || password === ``) {
    return console.log(`Proszę uzupełnić formularz!`);
  }
  console.log(`Email: ${email},
  Password: ${password}`);
  form.reset();
}

loginForm.addEventListener(`submit`, handleSubmit);
