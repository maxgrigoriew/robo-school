import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
export const slider = new Swiper(".trainers__slider", {
  slidesPerView: "auto",
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
});
