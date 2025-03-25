import {
  upcomingMoviesSwiper,
  featuredMoviesSwiper,
  newArrivalMoviesSwiper,
} from './swiper';
import defaultImage from '../img/vite-logo.png';

const upcomingList = document.querySelector(`.upcomingmovies-list`);
const userList = document.querySelector(`.user-movies-list`);
const newArrivalList = document.querySelector(`.new-arrival-movies-list`);
export const featuredList = document.querySelector(`.featuredmovies-list`);

export function renderUpcomingMovies(movies) {
  const markup = movies
    .map(
      ({ backdrop_path, original_title, overview, vote_average }) => `
 <li class="swiper-slide hero-swiper-slide">
<div class="container">
  <div class="text-container">
        <h1 class="hero-movie-title">${original_title}</h1>
        <span class="hero-movie-average">${vote_average.toFixed(1)}/10</span>
        <p class="hero-movie-text">${overview.slice(0, 450)}</p>
        <a href="" class="hero-movie-link">Watch trailer</a>
        </div>
      </div>
        <img
          class="hero-img"
          src="https://image.tmdb.org/t/p/original/${backdrop_path}"
        />
      </li>   `
    )
    .join(``);
  upcomingList.innerHTML = markup;
  upcomingMoviesSwiper();
}

export function renderFeaturedMovies(movies) {
  const markup = movies
    .map(
      ({ title, vote_average, poster_path, release_date }) => `
    <li class="swiper-slide featured-swiper-slide">
    ${
      poster_path
        ? `<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${poster_path}" 
        width="250" 
        height="370"
        alt="${title}"
        />`
        : `<img
          class="featuredList-img"
          src="${defaultImage}"
          width="250"
          height="370"
          alt="Default Image"
        />`
    }

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${title}</h3>
        <p class="featured-movie-average">Average: ${vote_average.toFixed(
          1
        )}/10</p>
        <p class="featured-movie-text">Release: ${release_date}</p>
 </li>`
    )
    .join(``);
  featuredList.innerHTML = markup;
  featuredMoviesSwiper();
}

export function renderUserMovies(movies) {
  const markup = movies
    .map(
      ({ title, vote_average, poster_path, release_date }) => `
    <li class="user-movies-item">
<img class="user-movies-img"src="https://image.tmdb.org/t/p/w500/${poster_path}" width="250" height="370"
        />
        <div class="user-movies-text-container">
        <h3 class="user-movies-title">${title}</h3>
        <p class="user-movies-average">Average: ${vote_average.toFixed(
          1
        )}/10</p>
        <p class="user-movies-text">Release: ${release_date}</p>
 </li>`
    )
    .join(``);
  userList.insertAdjacentHTML(`beforeend`, markup);
}

export function renderNewArrivalMovies(movies) {
  const markup = movies
    .map(
      ({ title, vote_average, poster_path, release_date }) => `
    <li class="swiper-slide featured-swiper-slide">
    ${
      poster_path
        ? `<img class="featuredList-img"
        src="https://image.tmdb.org/t/p/w500/${poster_path}" 
        width="250" 
        height="370"
        alt="${title}"
        />`
        : `<img
          class="featuredList-img"
          src="${defaultImage}"
          width="250"
          height="370"
          alt="Default Image"
        />`
    }

        <div class="featured-text-container">
        <h3 class="featured-movie-title">${title}</h3>
        <p class="featured-movie-average">Average: ${vote_average.toFixed(
          1
        )}/10</p>
        <p class="featured-movie-text">Release: ${release_date}</p>
 </li>`
    )
    .join(``);
  newArrivalList.innerHTML = markup;
  newArrivalMoviesSwiper();
}

export function cleanUserMovies() {
  userList.innerHTML = '';
}
