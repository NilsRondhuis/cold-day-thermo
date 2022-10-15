import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: true,
  grabCursor: true,
  breakpoints: {
    768: {
      spaceBetween: 100,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      spaceBetween: 100,
      slidesPerView: 3,
      slidesPerGroup: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
