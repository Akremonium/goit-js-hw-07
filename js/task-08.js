const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-action='render']"),
  destroyBtn: document.querySelector("button[data-action='destroy']"),
  collection: document.querySelector("#boxes"),
};

const createBoxes = (number) => {
  for (let i = 0; i < number; i += 1) {
    const divEl = document.createElement("div");
    const randomRgb = () => {
      const rgbNum = () => Math.floor(Math.random() * 256);
      const r = rgbNum();
      const g = rgbNum();
      const b = rgbNum();
      return `rgb(${r},${g},${b})`;
    };
    divEl.style.backgroundColor = randomRgb;
  }
};
