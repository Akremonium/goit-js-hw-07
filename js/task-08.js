const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-action='render']"),
  destroyBtn: document.querySelector("button[data-action='destroy']"),
  collection: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  const collectionEl = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, 
      ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    divEl.style.width = 30 + 10 * i + "px";
    divEl.style.height = 30 + 10 * i + "px";

    collectionEl.push(divEl);
  }
  refs.collection.append(...collectionEl);
};

const onCreateBtnClick = () => {
  createBoxes(refs.input.value);
};

const onDestroyBtnClick = () => {
  refs.collection.innerHTML = "";
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
