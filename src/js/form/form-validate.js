import refs from "../common/refs";
import {
  showErrorInputNameIsNumber,
  showErrorInputNameLength,
  showErrorInputTelIsWord,
  removeErrorInputName,
  removeErrorInputTel,
} from "./form-messages";

refs.input_name.addEventListener("input", onCheckInputName);
refs.input_tel.addEventListener("input", onCheckInputTel);

function onCheckInputName(e) {
  const input_name = e.target;

  if (/\d/g.test(input_name.value)) {
    input_name.classList.remove("success");
    showErrorInputNameIsNumber();
    input_name.classList.add("error");
  } else {
    input_name.classList.remove("error");
    removeErrorInputName();
    input_name.classList.add("success");
  }

  if (input_name.value.length < 2) {
    showErrorInputNameLength();
    input_name.classList.remove("success");
    input_name.classList.add("error");
  }

  if (input_name.value === "") {
    removeErrorInputName();
    input_name.classList.remove("error");
    input_name.classList.remove("success");
  }

  checkInputAtError();
}

function onCheckInputTel(e) {
  const input_tel = e.target;

  if (/[а-яА-ЯёЁЇїІіЄєҐґa-zA-Z]/g.test(input_tel.value)) {
    showErrorInputTelIsWord();
    input_tel.classList.remove("success");
    input_tel.classList.add("error");
  } else {
    removeErrorInputTel();
    input_tel.classList.add("error");
  }

  if (
    /^((0|\+3|\+38|38))?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g.test(
      input_tel.value
    )
  ) {
    input_tel.classList.remove("error");
    input_tel.classList.add("success");
  } else input_tel.classList.remove("success");

  if (input_tel.value === "") {
    removeErrorInputTel();
    input_tel.classList.remove("error");
    input_tel.classList.remove("success");
  }

  checkInputAtError();
}

function checkInputAtError() {
  if (
    refs.input_name.classList.contains("error") ||
    refs.input_tel.classList.contains("error")
  ) {
    refs.submit_btn.setAttribute("disabled", "true");
  } else refs.submit_btn.removeAttribute("disabled");
}
