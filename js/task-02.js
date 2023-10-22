const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

const array = ingredients.map((ingredient) => {
  const item = document.createElement(`li`);
  item.classList.add(`item`);
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...array);

console.log(...array);
