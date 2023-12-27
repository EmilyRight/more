const teaser = document.querySelector('.teaser');
const header = document.querySelector('.header');
const showBtnBlock = document.querySelector('.up-btn-block');
const showBtnBlockHeight = showBtnBlock.clientHeight;
const scrollUpHeight = teaser.clientHeight + header.clientHeight;
function scrollToTop() {
  window.scrollTo({ top: scrollUpHeight, behavior: 'smooth' });
}

function showBtn() {
  const upButton = document.querySelector('.up-btn');
  if (window.scrollY > showBtnBlockHeight - 1) {
    upButton.classList.add('visible');
    handleUpBtn();
  } else {
    upButton.classList.remove('visible');
  }
  // const observableElement = document.querySelector('.observable');
  // const options = {
  //   root: document.querySelector('.page'),
  //   rootMargin: '5px',
  //   threshold: 0,
  // };

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       btn.classList.add('visible');
  //     }
  //   });
  //   observer.unobserve(observableElement);
  // }, options);
  // observer.observe(observableElement);
}

function handleUpBtn() {
  const up = document.querySelector('.up-btn');
  up.addEventListener('click', () => {
    scrollToTop();
    up.classList.remove('visible');
  });
}

export { scrollToTop, handleUpBtn, showBtn };
