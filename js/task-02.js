const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`#ingredients`);

//(const elementsList = ingredients
//.map((ingredient) => `<li class="item">${ingredient}</li>`)
//.join("");

//ingredientsList.insertAdjacentHTML(`afterbegin`, elementsList);)

for (const ingredient of ingredients) {
  const item = document.createElement(`li`);
  item.textContent = ingredient;
  item.classList.add(`item`);
  ingredientsList.appendChild(item);
}
