import {
  links, hidden, active, noscroll, oldText, newText, closeIconClassName,
} from '../constants';

const { body } = document;

function defineModal(modalBoxName) {
  const modalBoxesList = document.querySelectorAll('.modal-box');
  const [modalBox] = Array.from(modalBoxesList)
    .filter((modal) => modal.dataset.modal === modalBoxName);
  return modalBox;
}
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  const windowsWidth = window.innerWidth;
  const scrollbarWidth = windowsWidth - documentWidth;
  return scrollbarWidth;
}

function setAttributes(modal, btnName, action) {
  const connectBtn = modal.querySelector('.connect-btn');
  const alreadyBtn = modal.querySelector('.already-btn');
  const modalContent = modal.querySelector('.modal-box__content');
  connectBtn.dataset.event = `conv_connect_${btnName}`;
  alreadyBtn.dataset.event = `conv_connect_${btnName}`;
  connectBtn.dataset.context = `${btnName}`;
  alreadyBtn.dataset.context = `${btnName}`;
  alreadyBtn.addEventListener('click', (event) => {
    if (action === 'change-text') {
      event.preventDefault();
      modalContent.innerHTML = newText;
    } else {
      alreadyBtn.setAttribute('target', '_blank');
      alreadyBtn.href = links[action];
    }
  });
}

export function openModal(modalBoxName, name, action) {
  const modalBox = defineModal(modalBoxName);

  const modal = modalBox.closest('.popup-modal');

  body.style.paddingRight = `${getScrollbarWidth()}px`;
  body.classList.add(noscroll);
  modal.classList.remove(hidden);
  modalBox.classList.add(active);
  setAttributes(modalBox, name, action);

  // закрыть эту модалку
  modal.addEventListener('click', (e) => {
    const { target } = e;
    const closeModalButton = (
      target.classList.contains(closeIconClassName))
      ? target
      : target.closest(`.${closeIconClassName}`);

    if (closeModalButton) {
      closeModal(modalBox);
    }
  });
}

export function closeModal(modalBox) {
  const modalContent = document.querySelector('.modal-box__content');
  const modalHeader = document.querySelector('.modal-box__title');
  body.classList.remove(noscroll);
  body.style.paddingRight = '0px';
  modalBox.closest('.popup-modal').classList.add(hidden);
  modalContent.innerHTML = oldText;
  modalHeader.classList.remove('hidden');
}
