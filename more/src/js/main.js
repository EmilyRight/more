import { WOW } from './vendor/wow.min';
import detectDevice from './components/detectDevice';

import GTMEvents from './components/gtmEvents';
import videoTeaser from './components/videoTeaser';
import { countScroll, getCurrentYear } from './components/utils';
import { openModal } from './components/modal';
import { handleUpBtn, scrollToTop, showBtn } from './components/upScrollBtn';

const GTM = new GTMEvents();

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();
  new WOW().init();
  GTM.addEventListeners();
  getCurrentYear();
  goNextSection();
  scrollTeaser(document.querySelector('.section-about'));
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
    popupLink.addEventListener('click', () => openModal(modalName, id));
  });
}

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}

// scroll to next if URL contains #about

function scrollTeaser(el) {
  if (window.location.hash === '#about') {
    scrollToElement(el);
    showBtn();
  }
}
