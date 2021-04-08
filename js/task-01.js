const categoriesEl = document.querySelector("#categories");

console.log(`В списке ${categoriesEl.children.length} категории`);

const allItemsEl = categoriesEl.querySelectorAll(".item");

const list = (item) => {
  console.log(
    ` Категория: ${item.firstElementChild.textContent} 
Количество элементов: ${item.lastElementChild.querySelectorAll("li").length}`
  );
};

list(allItemsEl[0]);
list(allItemsEl[1]);
list(allItemsEl[2]);
