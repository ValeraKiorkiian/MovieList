import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  renderFeaturedMovies,
  renderUpcomingMovies,
  renderUserMovies,
  renderNewArrivalMovies,
  renderVideos,
  renderActors,
  cleanUserMovies,
} from './render';
import {
  getUpcomingMovies,
  getFeaturedMovies,
  getUserMovies,
  getNewArrivalMovies,
  getVideosById,
  getActors,
} from './themoviedb-api';

const iziToastContent = {
  message:
    'Sorry, there are no movies matching your search query. Please try again',
  position: 'topRight',
  messageColor: '#fff',
  backgroundColor: '#ef4040',
  theme: 'dark',
  maxWidth: '432px',
};

export const form = document.querySelector(`.header-form`);
export const moveToMainBtn = document.querySelector(`.user-movies-btn`);
const featuredSection = document.querySelector(`.featured`);
const userMovieSection = document.querySelector(`.user-movies`);
const newArrivalSection = document.querySelector(`.new-arrival-movies`);
const videosSection = document.querySelector('.videos');
export const showMoreBtn = document.querySelector(`.show-more-btn`);
export const openModalBtn = document.querySelector(`.header-sign-btn`);
export const closeModalBtn = document.querySelector(`.modal-close-btn`);
const modalSignIn = document.querySelector(`.modal-overlay`);

let movieName = '';
let page = 1;

export async function onDOMContentLoaded() {
  try {
    const { results } = await getUpcomingMovies();
    const slideResult = results.slice(0, 5);
    renderUpcomingMovies(slideResult);
  } catch (error) {
    console.log(error);
  }
  try {
    const { results } = await getFeaturedMovies();
    renderFeaturedMovies(results);
  } catch (error) {
    console.log(error);
  }
  try {
    const { results } = await getNewArrivalMovies();
    renderNewArrivalMovies(results);
  } catch (error) {
    console.log(error);
  }
  try {
    const videos = await getVideosById();
    console.log(videos);

    renderVideos(videos);
  } catch (error) {
    console.log(error);
  }
  try {
    const { results } = await getActors();
    console.log(results);

    renderActors(results.slice(0, 15));
  } catch (error) {
    console.log(error);
  }
}

export async function onSubmitForm(event) {
  event.preventDefault();
  page = 1;
  cleanUserMovies();
  try {
    movieName = event.currentTarget.elements.headerSearch.value.trim();
    const { results, total_results } = await getUserMovies(movieName, page);
    if (!results || results.length === 0) {
      iziToast.show(iziToastContent);
      onMoveToMainBtn();
      return;
    }
    featuredSection.style.display = 'none';
    newArrivalSection.style.display = 'none';
    userMovieSection.classList.remove('hiden');
    videosSection.style.display = 'none';

    renderUserMovies(results);
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
  }
}

export function onMoveToMainBtn() {
  userMovieSection.classList.add('hiden');
  featuredSection.style.display = 'flex';
  newArrivalSection.style.display = 'flex';
  videosSection.style.display = 'flex';
}

export async function onShowMoreBtnClick() {
  page++;
  try {
    const { results, total_results, total_page } = await getUserMovies(
      movieName,
      page
    );
    renderUserMovies(results);
    const items = document.querySelectorAll('.user-movies-item');
    if (items.length >= total_results) {
    }
  } catch (error) {
    console.log(error);
  }
}

export function toggleModal() {
  modalSignIn.classList.toggle(`is-open`);
  if (modalSignIn.classList.contains('is-open')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}
