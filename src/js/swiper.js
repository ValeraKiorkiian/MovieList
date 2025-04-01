// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// export function upcomingMoviesSwiper() {
//   new Swiper('.upcomingMoviesSwiper', {
//     direction: 'vertical',
//     autoplay: {
//       delay: 5000,
//     },
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<span class="${className}">${index + 1}</span>`;
//       },
//     },
//   });
// }
// export function featuredMoviesSwiper() {
//   new Swiper('.featuredMoviesSwiper', {
//     slidesPerView: 4,
//     spaceBetween: 80,
//     loop: true,
//     navigation: {
//       nextEl: '.featured-swiper-next',
//       prevEl: '.featured-swiper-prev',
//     },
//   });
// }

// export function newArrivalMoviesSwiper() {
//   new Swiper('.newArrivalMoviesSwiper', {
//     slidesPerView: 4,
//     spaceBetween: 80,
//     loop: true,
//     navigation: {
//       nextEl: '.new-arrival-swiper-next',
//       prevEl: '.new-arrival-swiper-prev',
//     },
//   });
// }

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const upcomingSwiper = new Swiper('.upcomingMoviesSwiper', {
  direction: 'vertical',
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});

export const featuredSwiper = new Swiper('.featuredMoviesSwiper', {
  slidesPerView: 4,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: '.featured-swiper-next',
    prevEl: '.featured-swiper-prev',
  },
});

export const newArrivalSwiper = new Swiper('.newArrivalMoviesSwiper', {
  slidesPerView: 4,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: '.new-arrival-swiper-next',
    prevEl: '.new-arrival-swiper-prev',
  },
});

export const videosSwiper = new Swiper('.videosSwiper', {
  slidesPerView: 2.6,
  spaceBetween: 48,
  loop: true,
  navigation: {
    nextEl: '.videos-swiper-next',
    prevEl: '.videos-swiper-prev',
  },
});

export const actorsSwiper = new Swiper('.actorsSwiper', {
  slidesPerView: 4,
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: '.actors-swiper-next',
    prevEl: '.actors-swiper-prev',
  },
});
