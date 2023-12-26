const hidden = 'popup-modal-hidden';
const active = 'modal-box-active';
const noscroll = 'modal-box-viewed';
const closeIconClassName = 'close';
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

export function openModal(modalBoxName) {
  const modalBox = defineModal(modalBoxName);

  const modal = modalBox.closest('.popup-modal');

  body.style.paddingRight = `${getScrollbarWidth()}px`;
  body.classList.add(noscroll);
  modal.classList.remove(hidden);
  modalBox.classList.add(active);

  // закрыть эту модалку
  modal.addEventListener('click', (e) => {
    const { target } = e;
    const closeModalButton = (
      target.classList.contains(closeIconClassName))
      ? target
      : target.closest(`.${closeIconClassName}`);

    if (!target.closest('.modal-box') || closeModalButton) {
      closeModal(modalBox);
    }
  });
}

export function closeModal(modalBox) {
  body.classList.remove(noscroll);
  body.style.paddingRight = '0px';
  modalBox.closest('.popup-modal').classList.add(hidden);
}
