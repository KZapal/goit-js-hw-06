const categoriesList = document.querySelector(`#categories`);
const numbersOfCategories = categoriesList.children.length;
console.log(`Number of categories: ${numbersOfCategories}`);

let items = categoriesList.querySelectorAll(`.item`);

for (const item of items) {
  const headItem = item.firstElementChild;
  const NumberOfItemsInItem = item.lastElementChild.children.length;
  console.log(`Category: ${headItem.innerHTML}`);
  console.log(`Elements: ${NumberOfItemsInItem}`);
}
