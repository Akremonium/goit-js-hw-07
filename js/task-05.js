const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInputType = (event) => {
  refs.output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.output.textContent = "незнакомец";
  }
};

refs.input.addEventListener("input", onInputType);
