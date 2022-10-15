import refs from "./common/refs";
import scroll from "./common/scroll";

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("order-btn")) {
    return;
  }

  scroll(refs.form);
});
