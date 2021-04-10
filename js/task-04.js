const btnIncr = document.querySelector("button[data-action='increment']");
const btnDecr = document.querySelector("button[data-action='decrement']");
const valueRef = document.querySelector("#value");

const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

btnIncr.addEventListener("click", () => {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});

btnDecr.addEventListener("click", () => {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});
