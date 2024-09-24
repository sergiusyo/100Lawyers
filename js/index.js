/*слайдер*/
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  rewind: true,

  speed: 350,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
