function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBtn() {
  const btn = document.querySelector('.up-btn');
  const observableElement = document.querySelector('.observable');
  const options = {
    root: document.querySelector('.page'),
    rootMargin: '5px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        btn.classList.add('visible');
      }
    });
    observer.unobserve(observableElement);
  }, options);
  observer.observe(observableElement);
}

function handleUpBtn() {
  const up = document.querySelector('.up-btn');
  up.addEventListener('click', () => {
    scrollToTop();
    up.classList.remove('visible');
  });
}

export { scrollToTop, handleUpBtn, showBtn };
