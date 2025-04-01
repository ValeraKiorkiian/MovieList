import './js/swiper';
import {
  onDOMContentLoaded,
  onSubmitForm,
  onMoveToMainBtn,
  onShowMoreBtnClick,
  openModalBtn,
  closeModalBtn,
  toggleModal,
} from './js/handlers';
import { form, moveToMainBtn, showMoreBtn } from './js/handlers';

document.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);
form.addEventListener(`submit`, onSubmitForm);
moveToMainBtn.addEventListener(`click`, onMoveToMainBtn);
showMoreBtn.addEventListener(`click`, onShowMoreBtnClick);
openModalBtn.addEventListener(`click`, toggleModal);
closeModalBtn.addEventListener(`click`, toggleModal);
