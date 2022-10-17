import refs from "./common/refs";
import { data_man, data_woman } from "./data/gallery-photo";

refs.box_gallery.addEventListener("click", onClickGallery);

function onClickGallery(e) {
  if (e.target.classList.contains("man-small-photo")) {
    removeItemBg(refs.item_man_small);

    showCurrentPhoto(e.target, data_man, refs.img_large_man);
  }
  if (e.target.classList.contains("woman-small-photo")) {
    removeItemBg(refs.item_woman_small);

    showCurrentPhoto(e.target, data_woman, refs.img_large_woman);
  }
}

function showCurrentPhoto(el, data, img) {
  el.classList.add("on-show-photo");
  const current_id = el.dataset.id;
  const photo = data.find(({ id }) => current_id === id);

  if (photo.hasOwnProperty("man")) {
    img.src = photo.man;
    img.srcset = `${photo.man} 1x, ${photo.man_2x} 2x`;
    img.alt = photo.name;
  } else {
    img.src = photo.woman;
    img.srcset = `${photo.woman} 1x, ${photo.woman_2x} 2x`;
    img.alt = photo.name;
  }
}

function removeItemBg(item) {
  item.forEach((el) => {
    el.classList.remove("on-show-photo");
  });
}
