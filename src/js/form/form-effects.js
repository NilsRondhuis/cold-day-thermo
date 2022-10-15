import refs from "../common/refs";

refs.input_name.addEventListener("focus", onFocusInputName);
refs.input_name.addEventListener("blur", onNotFocusInputName);

refs.input_tel.addEventListener("focus", onFocusInputTel);
refs.input_tel.addEventListener("blur", onNotFocusInputTel);

function onFocusInputName() {
  refs.label_name.classList.add("visually-hidden");
}
function onNotFocusInputName(e) {
  if (e.target.value === "") {
    refs.label_name.classList.remove("visually-hidden");
  } else return;
}

function onFocusInputTel() {
  refs.label_tel.classList.add("visually-hidden");
}
function onNotFocusInputTel(e) {
  if (e.target.value === "") {
    refs.label_tel.classList.remove("visually-hidden");
  } else return;
}
