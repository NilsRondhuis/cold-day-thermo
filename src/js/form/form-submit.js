import refs from "../common/refs";
import {
  showErrorInputNameIsEmpty,
  showErrorInputTelIsEmpty,
  removeErrorInputNameIsEmpty,
  removeErrorInputTelIsEmpty,
  showSubmitFormSuccess,
  showSubmitFormError,
} from "./form-messages";

refs.form.addEventListener("submit", onSubmitForm);

const TOKEN = "5639141510:AAEAkoN1GoBzGIVtM9cOhQwaSZUaJV-wLtU";
const CHAT_ID = "-880041498";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function onSubmitForm(e) {
  e.preventDefault();

  const { name, tel } = e.currentTarget.elements;

  if (name.value === "") {
    showErrorInputNameIsEmpty();
    removeErrorInputNameIsEmpty();
    return;
  }
  if (tel.value === "") {
    showErrorInputTelIsEmpty();
    removeErrorInputTelIsEmpty();
    return;
  }

  const data = {
    name: name.value,
    tel: tel.value,
  };

  fethTelegram(data);

  formReset(refs);
}

function fethTelegram(data) {
  let message = `<b>Заявка з сайту!</b>\n`;
  message += `<b>Відправник: </b> ${data.name}\n`;
  message += `<b>Телефон: </b> ${data.tel}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  options.body = JSON.stringify(dataTg);

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => {
      showSubmitFormSuccess();
    })
    .catch((err) => {
      showSubmitFormError();
    });
}

function formReset(refs) {
  const { form, label_name, label_tel, input_name, input_tel } = refs;

  form.reset();
  input_name.classList.remove("success");
  input_tel.classList.remove("success");

  label_name.classList.remove("visually-hidden");
  label_tel.classList.remove("visually-hidden");
}
