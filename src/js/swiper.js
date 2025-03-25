import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function upcomingMoviesSwiper() {
  new Swiper('.upcomingMoviesSwiper', {
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
}
export function featuredMoviesSwiper() {
  new Swiper('.featuredMoviesSwiper', {
    slidesPerView: 4,
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.featured-swiper-next',
      prevEl: '.featured-swiper-prev',
    },
  });
}

export function newArrivalMoviesSwiper() {
  new Swiper('.newArrivalMoviesSwiper', {
    slidesPerView: 4,
    spaceBetween: 80,
    loop: true,
    navigation: {
      nextEl: '.new-arrival-swiper-next',
      prevEl: '.new-arrival-swiper-prev',
    },
  });
}
