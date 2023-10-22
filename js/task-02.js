const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

const item = document.createElement(`li`);
item.innerText = ingredients[0];
item.classList.add(`item`);
ingredientsList.appendChild(item);
