var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets'
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay:3000,
    disableOnInteraction: false
  },
  speed: 800,
  loop:true,
});



// var swiper1 = new Swiper(".mySwiper1", {
//   loop:true,
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     // el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay:1000,
//     disableOnInteraction: false
//   },
//   speed: 2000,
// });

// var swiper2 = new Swiper(".mySwiper2", {
//   loop:true,
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     // el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay:1000,
//     disableOnInteraction: false
//   },
//   speed: 2000,
// });

// var swiper3 = new Swiper(".mySwiper3", {
//   loop:true,
//   slidesPerView: 4,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     // el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay:1000,
//     disableOnInteraction: false
//   },
//   speed: 2000,
// });