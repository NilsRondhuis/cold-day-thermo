import refs from "../common/refs";

function showErrorInputNameIsNumber() {
  refs.name_box_message.classList.remove("visually-hidden");
  refs.name_message.textContent = "Поле Ім'я може містити тільки букви.";
}
function showErrorInputNameLength() {
  refs.name_box_message.classList.remove("visually-hidden");
  refs.name_message.textContent =
    "Поле Ім'я може містити 2 або більше символів.";
}

function showErrorInputTelIsWord() {
  refs.tel_box_message.classList.remove("visually-hidden");
  refs.tel_message.textContent = "Поле Телефон може містити тільки цифри.";
}

function showErrorInputNameIsEmpty() {
  refs.name_box_message.classList.remove("visually-hidden");
  refs.name_message.textContent = "Заповніть це поле.";
  refs.submit_btn.setAttribute("disabled", "true");
}

function showErrorInputTelIsEmpty() {
  refs.tel_box_message.classList.remove("visually-hidden");
  refs.tel_message.textContent = "Заповніть це поле.";
  refs.submit_btn.setAttribute("disabled", "true");
}

function removeErrorInputName() {
  refs.name_box_message.classList.add("visually-hidden");
}
function removeErrorInputTel() {
  refs.tel_box_message.classList.add("visually-hidden");
}

function showSubmitFormSuccess() {
  refs.submit_message_success.classList.add("is-show");

  setTimeout(() => {
    refs.submit_message_success.classList.remove("is-show");
  }, 5000);
}
function showSubmitFormError() {
  refs.submit_message_error.classList.add("is-show");

  setTimeout(() => {
    refs.submit_message_error.classList.remove("is-show");
  }, 5000);
}

function removeErrorInputNameIsEmpty() {
  setTimeout(() => {
    refs.name_box_message.classList.add("visually-hidden");
    refs.submit_btn.removeAttribute("disabled");
  }, 3000);
}
function removeErrorInputTelIsEmpty() {
  setTimeout(() => {
    refs.tel_box_message.classList.add("visually-hidden");
    refs.submit_btn.removeAttribute("disabled");
  }, 3000);
}

export {
  showErrorInputNameIsNumber,
  showErrorInputNameLength,
  showErrorInputTelIsWord,
  showErrorInputNameIsEmpty,
  showErrorInputTelIsEmpty,
  removeErrorInputName,
  removeErrorInputTel,
  removeErrorInputNameIsEmpty,
  removeErrorInputTelIsEmpty,
  showSubmitFormSuccess,
  showSubmitFormError,
};
