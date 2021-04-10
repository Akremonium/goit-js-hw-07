const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingrediensEl = document.querySelector("#ingredients");

const elementsList = ingredients.map((item) => {
  const liEl = document.createElement("li");
  liEl.textContent = item;
  return liEl;
});

ingrediensEl.append(...elementsList);
