const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,

  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    970: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
