const refs = {
  btnIncr: document.querySelector("button[data-action='increment']"),
  btnDecr: document.querySelector("button[data-action='decrement']"),
  value: document.querySelector("#value"),
};

const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

refs.btnIncr.addEventListener("click", () => {
  counterValue.increment();
  refs.value.textContent = counterValue.value;
});

refs.btnDecr.addEventListener("click", () => {
  counterValue.decrement();
  refs.value.textContent = counterValue.value;
});
