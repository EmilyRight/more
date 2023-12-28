import { WOW } from './vendor/wow.min';
import detectDevice from './components/detectDevice';

import GTMEvents from './components/gtmEvents';
import { countScroll, getCurrentYear } from './components/utils';
import { openModal } from './components/modal';
import { showBtn } from './components/upScrollBtn';

const GTM = new GTMEvents();

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();
  new WOW().init();
  GTM.addEventListeners();
  getCurrentYear();
  goNextSection();
  scrollToBlock();
  openPopup();
});

window.addEventListener('scroll', () => {
  countScroll();
  showBtn();
});

function goNextSection() {
  const goNextBtns = document.querySelectorAll('.js-go-next');
  const sectionsList = document.querySelectorAll('section');

  goNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnParentNode = btn.closest('section');
      let sectionToScrollTo;
      sectionsList.forEach((el, index) => {
        if (el === btnParentNode) {
          sectionToScrollTo = sectionsList[index + 1];
          scrollToElement(sectionToScrollTo);
        }
      });
    });
  });
}

function openPopup() {
  const popupLinksList = document.querySelectorAll('.popup__link');
  popupLinksList.forEach((popupLink) => {
    const modalName = popupLink.dataset.modal;
    const id = popupLink.dataset.event;
    const { action } = popupLink.dataset;
    popupLink.addEventListener('click', () => openModal(modalName, id, action));
  });
}

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}

// scroll to next if URL contains #about

function scrollToBlock() {
  const { hash } = window.location;
  if (hash) {
    const element = document.getElementById(`${hash}`);
    scrollToElement(element);
    showBtn();
  }
}
