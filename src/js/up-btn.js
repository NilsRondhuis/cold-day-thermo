import refs from "./common/refs";
import scroll from "./common/scroll";

window.addEventListener("scroll", onShowUpBtn);
refs.up_btn.addEventListener("click", onClickUpBtn);

function onShowUpBtn() {
  const rect = document.body.getBoundingClientRect();
  console.log(rect.y);

  if (rect.y < -1400) {
    refs.up_btn.classList.add("up-btn__is-show");
  } else refs.up_btn.classList.remove("up-btn__is-show");
}

function onClickUpBtn() {
  scroll(document.body);
}
