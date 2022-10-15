import refs from "./common/refs";
import {
  data_man_mobile,
  data_man_tablet,
  data_woman_mobile,
  data_woman_tablet,
} from "./data/gallery-photo";

if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
  refs.box_gallery.addEventListener("touchstart", onClickGallery);
} else refs.box_gallery.addEventListener("click", onClickGallery);

function onClickGallery(e) {
  if (e.target.classList.contains("man-small-photo")) {
    removeItemBg(refs.item_man_small);

    if (window.innerWidth < 768) {
      showCurrentPhoto(e.target, data_man_mobile, refs.source_mobile_man);
    } else showCurrentPhoto(e.target, data_man_tablet, refs.source_tablet_man);
  }
  if (e.target.classList.contains("woman-small-photo")) {
    removeItemBg(refs.item_woman_small);

    if (window.innerWidth < 768) {
      showCurrentPhoto(e.target, data_woman_mobile, refs.source_mobile_woman);
    } else
      showCurrentPhoto(e.target, data_woman_tablet, refs.source_tablet_woman);
  }
}

function showCurrentPhoto(el, data, source) {
  el.classList.add("on-show-photo");
  const current_id = el.dataset.id;
  const photo = data.find(({ id }) => current_id === id);

  if (photo.hasOwnProperty("man")) {
    source.srcset = `${photo.man}, ${photo.man_2x}`;
  } else source.srcset = `${photo.woman}, ${photo.woman_2x}`;
}

function removeItemBg(item) {
  item.forEach((el) => {
    el.classList.remove("on-show-photo");
  });
}
