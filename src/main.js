import './js/swiper';
import {
  onDOMContentLoaded,
  onSubmitForm,
  onMoveToMainBtn,
  onShowMoreBtn,
  openModalBtn,
  closeModalBtn,
  toggleModal,
} from './js/handlers';
import { form, moveToMainBtn, showMoreBtn } from './js/handlers';

document.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);
form.addEventListener(`submit`, onSubmitForm);
moveToMainBtn.addEventListener(`click`, onMoveToMainBtn);
showMoreBtn.addEventListener(`click`, onShowMoreBtn);
openModalBtn.addEventListener(`click`, toggleModal);
closeModalBtn.addEventListener(`click`, toggleModal);
