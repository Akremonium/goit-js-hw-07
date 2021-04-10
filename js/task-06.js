const inputEl = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const classList = event.currentTarget.classList;
  if (
    Number(event.currentTarget.dataset.length) ===
    event.currentTarget.value.length
  ) {
    classList.remove("invalid");
    classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    classList.remove("invalid");
    classList.remove("valid");
  } else {
    classList.remove("valid");
    classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
