// const categoriesEl = document.querySelector("#categories");
// const allItemsEl = categoriesEl.querySelectorAll(".item");

// console.log(`В списке ${allItemsEl.length} категории`);

// const list = (item) => {
//   console.log(`Категория: ${item.firstElementChild.textContent}`);
//   console.log(
//     `Количество элементов: ${
//       item.lastElementChild.querySelectorAll("li").length
//     }`
//   );
// };

// list(allItemsEl[0]);
// list(allItemsEl[1]);
// list(allItemsEl[2]);

const allItemsEl = document.querySelectorAll(".item");
console.log(`В списке ${allItemsEl.length} категории.`);

allItemsEl.forEach((category) => {
  console.log(`Категория: ${category.children[0].textContent}`);
  console.log(`Количество элементов: ${category.children[1].children.length}`);
});
